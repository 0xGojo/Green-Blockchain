const randomstring = require("randomstring");
const encryption = require("../utils/encryption");

class UserService {
    async boot() {
        const superAdmin = await User.findOne({email: getEnv("DEFAULT_ADMIN_EMAIL")}).lean();
        if (!superAdmin) {
            const newPasswordHash = await encryption.hashPassword(getEnv("DEFAULT_ADMIN_PASSWORD"));
            if (!newPasswordHash.success) return newPasswordHash;

            const newSuperAdmin = new User({
                email: getEnv("DEFAULT_ADMIN_EMAIL"),
                password: newPasswordHash.data,
                roleId: User.constants.ROLE.ADMIN,
                isConfirm: true,
            });

            await newSuperAdmin.save();
        }
        return jsonSuccess();
    }

    async login(principal, params) {
        const {email, password} = params;

        const user = await User.findOne({email}).lean();

        if (!user) return jsonError(errors.INVALID_CREDENTIAL);
        if (!user.isConfirm) return jsonError(errors.NOT_CONFIRM_ERROR);

        //-- check the password
        const passwordCheckResult = await encryption.comparePassword(password, user.password);
        if (!passwordCheckResult.success) return passwordCheckResult;

        //-- generate token
        const {_id, role} = user;
        const accessToken = await encryption.generateToken(
            {_id, role},
            getEnv("JWT_SECRET"),
            getEnv("JWT_LOGIN_EXPIRED_IN")
        );
        if (!accessToken.success) return accessToken;

        return jsonSuccess({
            role,
            token: accessToken.data,
            fullName: user.fullName,
        });
    }

    async forgotPassword(principal, params) {
        const {email} = params;

        const user = await User.findOne({email});

        if (!user) return jsonError(errors.NOT_FOUND_ERROR);
        if (!user.isConfirm) return jsonError(errors.NOT_CONFIRM_ERROR);

        //-- generate token
        const {_id, role} = user;
        const tokenResult = await encryption.generateToken(
            {_id, role},
            getEnv("JWT_SECRET"),
            getEnv("FORGET_PASSWORD_EXPIRED_IN")
        );
        if (!tokenResult.success) return tokenResult;

        //-- send mail to user
        const options = {
            to: email,
            from: `"Green Blockchain" ${getEnv('EMAIL_ADMIN')}`,
            subject: `Forgot Password`
        };
        const sendMailResult = await mailService.sendTemplateEmail(
            'forgotPassword',
            {
                link: `${getEnv('FE_DOMAIN')}/forgot-password?token=${tokenResult.data}`
            },
            options
        );

        if (!sendMailResult.success) return sendMailResult;

        await User.updateOne({email}, {$set: {isChangePassword: false}});

        return jsonSuccess();
    }

    async changePassword(principal, params) {
        const {newPassword} = params;
        const _id = principal.user && principal.user._id;

        const user = await User.findById(_id);
        if (!user) return jsonError(errors.NOT_FOUND_ERROR);
        if (user.isChangePassword) return jsonError(errors.CHANGED_PASSWORD_ERROR);

        const passwordHash = await encryption.hashPassword(newPassword);
        if (!passwordHash.success) return passwordHash;

        await User.updateOne({_id}, {$set: {isChangePassword: true, password: passwordHash.data}});

        return jsonSuccess();
    }

    async customerRegister(principal, params) {
        const {email, fullName, password} = params;

        if (fullName && fullName.length < 6) return jsonError(errors.WRONG_LENGTH_ERROR);

        const user = await User.findOne({email}).lean();
        if (user) return jsonError(errors.DUPLICATE_EMAIL_ERROR);

        const passwordHash = await encryption.hashPassword(password);
        if (!passwordHash.success) return passwordHash;

        const code = randomstring.generate(6);
        const sendMail = await mailService.sendTemplateEmail(
            'confirmSignup',
            {
                code,
            },
            {
                to: email,
                from: `"Green Blockchain" ${getEnv('EMAIL_ADMIN')}`,
                subject: `Code Auth`
            }
        );
        if (!sendMail.success) return sendMail;

        const newUser = new User({
            email,
            fullName,
            password: passwordHash.data,
            role: User.constants.ROLE.CUSTOMER,
            codeConfirm: code
        });
        await newUser.save();

        const newCustomer = new Customer({userId: newUser._id});
        await newCustomer.save();

        return jsonSuccess();
    }

    async freelancerRegister(principal, params) {
        const {
            email,
            fullName,
            birthday,
            phoneNumber,
            country,
            city,
            password,
        } = params;

        if (fullName && fullName.length < 6) return jsonError(errors.WRONG_LENGTH_ERROR);

        const user = await User.findOne({email}).lean();
        if (user) return jsonError(errors.DUPLICATE_EMAIL_ERROR);

        const passwordHash = await encryption.hashPassword(password);
        if (!passwordHash.success) return passwordHash;


        const code = randomstring.generate(6);
        const sendMail = await mailService.sendTemplateEmail(
            'confirmSignup',
            {
                code,
            },
            {
                to: email,
                from: `"Green Blockchain" ${getEnv('EMAIL_ADMIN')}`,
                subject: `Code Auth`
            }
        );
        if (!sendMail.success) return sendMail;

        const newUser = new User({
            email,
            fullName,
            password: passwordHash.data,
            role: User.constants.ROLE.FREELANCER ,
            birthday,
            phoneNumber,
            codeConfirm: code,
        });
        await newUser.save();

        const newFreelancer = new Freelancer({
            userId: newUser._id,
            country,
            city,
        });
        await newFreelancer.save();

        return jsonSuccess();
    }

    async confirmEmail(principal, params) {
        const {email, code} = params;

        const user = await User.findOne({email}).lean();
        if (!user) return jsonError(errors.NOT_FOUND_ERROR);

        if (user.codeConfirm !== code) return jsonError(errors.WRONG_CODE_ERROR);

        await User.updateOne({email}, {$set: {isConfirm: true}});
        return jsonSuccess();
    }

    async resendConfirmEmail(principal, params) {
        const {email} = params;

        const user = await User.findOne({email});
        if (!user || user.isConfirm) return jsonError(errors.NOT_FOUND_ERROR);

        const code = randomstring.generate(6);
        const sendMail = await mailService.sendTemplateEmail(
            'confirmSignup',
            {
                code,
            },
            {
                to: email,
                from: `"Green Blockchain" ${getEnv('EMAIL_ADMIN')}`,
                subject: `Code Auth`
            }
        );
        if (!sendMail.success) return sendMail;

        user.codeConfirm = code;
        await user.save();

        return jsonSuccess();
    }
}

module.exports = UserService;
