const mongoose = require("mongoose");
const moment = require("moment");

const emailSchema = new mongoose.Schema({
    name : { type: String, required: true },
    company: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    products: { type: String, required: true },
    createdAt: { type: String, default: moment().format("YYYY-MM-DD hh:mm:ss") },
    updatedAt: { type: String },
})

const Email = mongoose.model("email", emailSchema);

module.exports = Email;