const Router = require('express');

const router = new Router();

const viewsController = require("../controllers/views.controller");

router.get('/orders/:id', viewsController.getOrders);
router.get('/client/:id', viewsController.getClientOrders);

module.exports = router