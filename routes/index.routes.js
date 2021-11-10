const {Router} = require('express'),
    router = Router();

router.use('/patient', require('./patient.routes'));
router.use('/appointment', require('./appointment.routes'))

module.exports = router