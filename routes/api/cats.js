const express = require('express');
const router = express.Router();
const catsCtrl = require('../../controllers/api/cats');

router.get('/', catsCtrl.index);
router.post('/', catsCtrl.create);

module.exports = router;