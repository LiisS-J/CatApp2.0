const express = require('express');
const router = express.Router();
const catsCtrl = require('../../controllers/api/cats');

router.get('/', catsCtrl.index);

module.exports = router;