const express = require('express');
const router = express.Router();
const catsCtrl = require('../../controllers/api/cats');

router.get('/', catsCtrl.index);
router.post('/', catsCtrl.create);
router.get('/:id', catsCtrl.show);
router.put('/:id', catsCtrl.update);
router.delete('/:id', catsCtrl.delete);

module.exports = router;