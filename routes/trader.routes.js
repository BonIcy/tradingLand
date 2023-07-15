let { Router } = require('express');
let router = Router();
let { getTrader, postTrader, deleteTrader, putTrader, patchTrader } = require('../controllers/trader.controllers.js');

router.get('/all', getTrader);
router.post('/add', postTrader);
router.delete('/del/:id', deleteTrader);
router.put('/put/:id', putTrader);
router.patch('/upd/:id', patchTrader);
module.exports = router;
