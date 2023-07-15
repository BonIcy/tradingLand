let { Router } = require('express');
let router = Router();
let { getTipoDinero, postTipoDinero, deleteTipoDinero, putTipoDinero, patchTipoDinero } = require('../controllers/tipoDinero.controller.js');

router.get('/all', getTipoDinero);
router.post('/add', postTipoDinero);
router.delete('/del/:id', deleteTipoDinero);
router.put('/put/:id', putTipoDinero);
router.patch('/upd/:id', patchTipoDinero);

module.exports = router;
