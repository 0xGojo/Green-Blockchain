const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");
const constants = {
    STATUS: {
        PENDING: 'pending',
        ACTIVE: 'active',
    }
};
const customerSchema = new mongoose.Schema({
    status: {type: String, default: constants.STATUS.PENDING, required: true},
    userId: {type: mongoose.Schema.ObjectId, ref: "Role", required: true},
}, {timestamps: true});
customerSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Customer', customerSchema);
module.exports.constants = constants;
