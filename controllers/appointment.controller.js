const ctrlPatient = require('./patient.controller');

const ctrlAppointment = {},
    Appointment = require('../models/appointment'),
    Patient = require('../models/patient'),
    message = require('../config/messages');

ctrlAppointment.create = async (req, res) => {
    const newAppointment = new Appointment(
        {
            dateTime: req.body.dateTime
        }
    );
    await newAppointment.save();
    res.json({ msg: message.appointment.postSuccess });
};

ctrlAppointment.list = async (req, res) => {
    const appointments = await Appointment.find();
    res.json(appointments);
};

ctrlAppointment.showAppointment = async (req, res) => {
    const { _id } = req.params;
    const appointment = await Appointment.findById(_id)
    const patientId = appointment.patient
    const patient = await Patient.findById(patientId);
    // const { document } = req.params;
    // const patient = await Patient.findOne({document: document}); //, function(err,obj) { console.log(obj); }
    res.json({ appointment: appointment, patient: patient });
};

ctrlAppointment.delete = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params._id);
        res.json({msg: message.appointment.delSuccess})
    }catch(error){
        res.json({msg: message.appointment.delError})
    }
}

ctrlAppointment.assign = async (req, res) => {
    try {
        const { _id } = req.params;
        const appointment = await Appointment.findByIdAndUpdate({ _id: _id },
            {
                patient: req.body.patient.trim(),
                status: true,
                uptadedAt: Date.now()
            });
        res.json({ msg: message.appointment.assignedSuccess });
    } catch (error) {
        res.json({ msg: message.appointment.assignedError, error: error })
    }
}

ctrlAppointment.deallocate = async (req, res) => {
    const { _id } = req.params;
    const checkAppointment = await Appointment.findById(_id);
    if (checkAppointment.patient == '') {
        res.json({ msg: message.appointment.deallocatedPreviously })
    }
    else {
        const appointment = await Appointment.findByIdAndUpdate({ _id: _id },
            {
                patient: '',
                status: false,
                uptadedAt: Date.now()
            });
    }
    res.json({ msg: message.appointment.deallocatedSuccess })
}


module.exports = ctrlAppointment;