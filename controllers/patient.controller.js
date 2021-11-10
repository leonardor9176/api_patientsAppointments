const ctrlPatient = {},
    Patient = require('../models/patient'),
    message = require('../config/messages');

ctrlPatient.create = async (req, res) => {
    try {
        const newPatient = new Patient(
            {
                name: req.body.name,
                document: req.body.document,
                phone: req.body.phone,
                email: req.body.email
            }
        );
        await newPatient.save();
        res.json({ msg: message.patient.postSuccess });
    } catch (error) {
        res.json({ msg: message.patient.postError, error: error });
    }
}

ctrlPatient.list = async (req, res) => {
    const patients = await Patient.find();
    res.json(patients);
}

ctrlPatient.showPatient = async (req, res) => {
    const { document } = req.params;
    const patient = await Patient.findOne({ document: document }); //, function(err,obj) { console.log(obj); }
    res.json(patient);
}

ctrlPatient.delete = async (req, res) => {
    const { _id } = req.params;
    const patient = await Patient.deleteOne({ _id: _id });
    res.json({ msg: message.patient.delSuccess })
}

ctrlPatient.update = async (req, res) => {
    const { _id } = req.params;
    const patient = await Patient.findByIdAndUpdate({ _id: _id },
        {
            name: req.body.name.trim(),
            document: req.body.document.trim(),
            phone: req.body.phone.trim(),
            email: req.body.email.trim(),
            uptadedAt: Date.now()
        });
    res.json({ msg: message.patient.updateSuccess });
}


module.exports = ctrlPatient;