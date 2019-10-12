const pagination = (total, page = 1, limit = 10) => {
    return {
        total,
        page,
        limit,
        offset: (page - 1) * limit,
        pages: (total % limit) ? Math.floor(total / limit) + 1 : total / limit
    }
};

const checkData = (value, data) => {
    let dataCheck;
    switch (data) {
        case 'STATUS_FREELANCER':
            dataCheck = Freelancer.constants.STATUS;
            break;
        case 'STATUS_ISSUE':
            dataCheck = Issue.constants.STATUS;
            break;
        default:
            return jsonError(errors.NOT_FOUND_ERROR)
    }
    const check = Object.values(dataCheck);
    if (check.indexOf(value) === -1) return jsonError(errors.WRONG_DEFINE_VALUE);

    return jsonSuccess();
};


module.exports = {pagination, checkData};
