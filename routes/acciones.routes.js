let { Router } = require('express');
let router = Router();
let { getAcciones, postAcciones, deleteAcciones, putAcciones, patchAcciones } = require('../controllers/acciones.controller.js');

router.get('/all', getAcciones);
router.post('/add', postAcciones);
router.delete('/del/:id', deleteAcciones);
router.put('/put/:id', putAcciones);
router.patch('/upd/:id', patchAcciones);

module.exports = router;
