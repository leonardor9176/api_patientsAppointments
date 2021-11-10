 const mongoose = require('mongoose')

 var PatientSchema = new mongoose.Schema(
    {
        name: { type: String, lowercase: true, required: true },
        document: { type: String, required: true, unique: true },
        phone: { type: Number, required: true },
        email: {type: String, required: true},
        createdAt: { type: Date, default : Date.now()},
        uptadedAt: { type: Date, default : Date.now()}
    }
);

module.exports =  mongoose.model('patients', PatientSchema)