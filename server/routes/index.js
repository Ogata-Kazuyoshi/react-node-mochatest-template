const router = require('express').Router();

router.use('/db', require('./dbinformation'));

module.exports = router;
