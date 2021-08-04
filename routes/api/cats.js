const express = require('express');
const router = express.Router();
const catsCtrl = require('../../controllers/api/cats');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', catsCtrl.index);
router.post('/', ensureLoggedIn, catsCtrl.create);
router.get('/:id', catsCtrl.show);
router.put('/:id', ensureLoggedIn, catsCtrl.update);
router.delete('/:id', ensureLoggedIn, catsCtrl.delete);

module.exports = router;