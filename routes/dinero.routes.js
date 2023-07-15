let { Router } = require('express');
let router = Router();
let { getDinero, postDinero, deleteDinero, putDinero, patchDinero } = require('../controllers/dinero.controller.js');

router.get('/all', getDinero);
router.post('/add', postDinero);
router.delete('/del/:id', deleteDinero);
router.put('/put/:id', putDinero);
router.patch('/upd/:id', patchDinero);

module.exports = router;
