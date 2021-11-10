const { appointment } = require('../config/messages');

const express = require('express'),
    router = express.Router(),
    appointmentCtrl = require('../controllers/appointment.controller')

router.post('/', appointmentCtrl.create);
router.get('/', appointmentCtrl.list);
router.get('/:_id', appointmentCtrl.showAppointment);
router.delete('/:_id', appointmentCtrl.delete);
router.put('/:_id', appointmentCtrl.assign);
router.put('/deallocate/:_id', appointmentCtrl.deallocate);
// router.delete('/:_id', patientCtrl.delete);
// router.get('/:document', patientCtrl.showPatient);

module.exports = router;