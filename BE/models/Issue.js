const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");
const constants = {
    STATUS: {
        PENDING: 'pending',
        SOLVE: 'solve',

    }
};
const issueSchema = new mongoose.Schema({
    customerId: {type: mongoose.Schema.ObjectId, ref: "Customer"},
    freelancerId: {type: mongoose.Schema.ObjectId, ref: "Freelancer"},
    country: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    lat: {type: String, required: true},
    long: {type: String, required: true},
    description: {type: String, required: true},
    media: {type: Array, default: []},
    pointOfContact: {
        fullName: {type: String},
        email: {type: String},
        phoneNumber: {type: String},
    },
    status: {type: String, default: constants.STATUS.PENDING, required: true},
}, {timestamps: true});

issueSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Issue', issueSchema);
module.exports.constants = constants;