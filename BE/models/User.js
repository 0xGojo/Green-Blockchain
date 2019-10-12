const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");
const constants = {
    ROLE: {
        ADMIN: 'admin',
        FREELANCER: 'freelancer',
        CUSTOMER: 'customer',
    }
};
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String },
    fullName: { type: String },
    phoneNumber: { type: String },
    birthday: { type: String },
    codeConfirm: { type: String },
    isConfirm: { type: Boolean, default: false },
    isChangePassword: { type: Boolean, default: true },
    roleId: { type: String, required: true },
}, { timestamps: true });
userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', userSchema);
module.exports.constants = constants;