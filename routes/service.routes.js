const express = require("express");
const { createService, getServicesByCategory, updateService, deleteService, addServicePrice } = require("../controllers/service.controller");
const router = express.Router();

router.post("/category/:categoryId/service", createService);
router.get("/category/:categoryId/services", getServicesByCategory);
router.put("/category/:categoryId/service/:serviceId", updateService);
router.delete("/category/:categoryId/service/:serviceId", deleteService);
router.post("/service/:serviceId/price", addServicePrice);

module.exports = router;