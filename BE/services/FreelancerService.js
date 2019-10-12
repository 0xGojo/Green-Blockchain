const {checkData, pagination} = require('../utils/commonFunc');

class FreelancerService {

    // async boot() {
    // }
    //
    // // admin site
    // async getAllFreelancer(principal, params) {
    //     let {page, limit, status, search} = params;
    //
    //     page = !page ? 1 : Number(page);
    //     limit = !limit ? 10 : Number(limit);
    //
    //     if (status) {
    //         const checkStatus = checkData(status, 'STATUS_FREELANCER');
    //         if (!checkStatus.success) return checkStatus;
    //     }
    //
    //     const query = status ? {status} : {};
    //
    //     const freelancers = await Freelancer.find(query)
    //         .populate('userId')
    //         .lean();
    //
    //     const data = search
    //         ? freelancers.filter(item => {
    //             const FILTER_REGEX = new RegExp(search, 'ig');
    //             return (
    //                 FILTER_REGEX.test(item.userId.email) ||
    //                 FILTER_REGEX.test(item.userId.fullName) ||
    //                 FILTER_REGEX.test(item.userId.phoneNumber)
    //             );
    //         })
    //         : freelancers;
    //     const {total, pages, offset} = pagination(data.length, page, limit);
    //
    //     const resultData = data.slice(offset).slice(0, limit);
    //
    //     const result = {
    //         total,
    //         pages,
    //         list: resultData.map(u => {
    //             return {
    //                 _id: u._id,
    //                 status: u.status,
    //                 email: u.userId && u.userId.email,
    //                 fullName: u.userId && u.userId.fullName,
    //                 phoneNumber: u.userId && u.userId.phoneNumber
    //             };
    //         })
    //     };
    //     return jsonSuccess(result);
    // }
    //
    // async getDetailFreelancer(principal, params) {
    //     const {id} = params;
    //     const freelancer = await Freelancer
    //         .findById(id)
    //         .populate(
    //             {
    //                 path: "userId",
    //                 select: "email fullName phoneNumber birthday termConditionAccepted privacyAccepted cookieAccepted"
    //             })
    //         .lean();
    //     return jsonSuccess(freelancer);
    // }
    //
    // async updateFreelancer(principal, body, params) {
    //     const {status} = body;
    //     const {id} = params;
    //
    //     const freelancer = await Freelancer.findById(id).lean();
    //     if (!freelancer) return jsonError(errors.NOT_FOUND_ERROR);
    //
    //     const checkStatus = checkData(status, 'STATUS_FREELANCER');
    //     if (!checkStatus.success) return checkStatus;
    //
    //     await Freelancer.findOneAndUpdate({_id: id}, {status}, {new: true});
    //     const data = await Freelancer.findById(id).populate(
    //         {
    //             path: "userId",
    //             select: "email fullName phoneNumber birthday termConditionAccepted privacyAccepted cookieAccepted"
    //         }).lean();
    //
    //     return jsonSuccess(data)
    // }
}

module.exports = FreelancerService;
