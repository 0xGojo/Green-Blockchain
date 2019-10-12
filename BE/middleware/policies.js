module.exports = {
    authenticated: () => {
        return (req, res, next) => {
            if (!req.principal || !req.principal.user)
                return res.json(jsonError(errors.NOT_AUTHENTICATED_ERROR));
            return next();
        };
    },

    isAdmin: () => {
        return async (req, res, next) => {
            const user = req.principal && req.principal.user;
            if (!user || !user._id)
                return res.json(jsonError(errors.ACCESS_DENIED));

            const admin = await User.findById(user._id).lean();
            const isAdmin = !admin || !admin.role || admin.role !== User.constants.ROLE.ADMIN;

            if (isAdmin)
                return res.json(jsonError(errors.PERMISSION_DENIED));
            return next();
        };
    },
};
