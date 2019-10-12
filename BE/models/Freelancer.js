const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");
const constants = {
    STATUS: {
        PENDING: 'pending',
        REJECTED: 'rejected',
        BLOCKED: 'blocked',
        ACTIVE: 'active',
    }
};
const freelancerSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.ObjectId, ref: "User", required: true},
    country: {type: String},
    city: {type: String},
    status: {type: String, default: constants.STATUS.PENDING, required: true},
}, {timestamps: true});

freelancerSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Freelancer', freelancerSchema);
module.exports.constants = constants;
