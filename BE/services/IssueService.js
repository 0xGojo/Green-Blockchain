const {pagination} = require("../utils/commonFunc");

class IssueService {

    async boot() {
        return jsonSuccess();
    }

    async createIssue(principal, params) {
        const customerId = principal.user && principal.user._id;

        const {
            email, fullName, phoneNumber, country, city, address, uploads, lat, long, description
        } = params;

        const issue = new Issue({
            customerId: customerId,
            pointOfContact: {
                fullName,
                email,
                phoneNumber,
            },
            country,
            city,
            address,
            lat,
            long,
            description
        });
        await issue.save();
        const media = [];

        if (Array.isArray(uploads) && uploads.length) {
            for (let i = 0; i < uploads.length; i++) {
                await systemService.saveFile(uploads[i].data, uploads[i].name);
                media.push(`uploads/${uploads[i].name}`);
            }
            issue.media = media
        } else if (uploads && uploads.data) {
            await systemService.saveFile(uploads.data, uploads.name);
            media.push(`uploads/${uploads.name}`);
        }
        await issue.save();
        return jsonSuccess()
    }

    async getAllIssue(principal, params) {
        let {page, limit, status} = params;

        page = !page ? 1 : Number(page);
        limit = !limit ? 10 : Number(limit);

        if (status) {
            const checkStatus = checkData(status, 'STATUS_ISSUE');
            if (!checkStatus.success) return checkStatus;
        }

        const query = status ? {status} : {};

        const projects = await Issue.find(query)
            .populate('customerId')
            .lean();

        const {total, pages, offset} = pagination(projects.length, page, limit);

        const resultData = projects.slice(offset).slice(0, limit);

        const result = {
            total,
            pages,
            list: resultData
        };

        return jsonSuccess(result);
    }
}

module.exports = IssueService;
