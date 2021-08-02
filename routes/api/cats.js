const express = require('express');
const router = express.Router();
const catsCtrl = require('../../controllers/api/cats');

router.get('/cats', catsCtrl.index);

module.exports = router;