const mongoose = require('mongoose')


var AppointmentSchema = new mongoose.Schema(
    {
        dateTime: { type: Date, required: true },
        patient: String, //{ type: mongoose.Schema.Types.ObjectId, ref: "patients" },
        status: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now() },
        uptadedAt: { type: Date, default: Date.now() }
    }
);

module.exports = mongoose.model('appointments', AppointmentSchema)