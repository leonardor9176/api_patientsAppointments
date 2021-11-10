const express = require('express'),
    router = express.Router(),
    patientCtrl = require('../controllers/patient.controller')

router.post('/', patientCtrl.create);
router.delete('/:_id', patientCtrl.delete);
router.get('/', patientCtrl.list);
router.get('/:document', patientCtrl.showPatient);
router.put('/:_id', patientCtrl.update);

module.exports = router;