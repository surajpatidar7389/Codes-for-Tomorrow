const Service = require("../models/service.model");
// const ServicePrice = require("../models/servicePrice.model");

exports.createService = async (req, res) => {
    try {
        const service = await Service.create({ 
            name: req.body.name, 
            type: req.body.type, 
            categoryId: req.body.categoryId 
        });
        res.json(service);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getServicesByCategory = async (req, res) => {
    try {
        const services = await Service.findAll({ where: { categoryId: req.params.categoryId } });
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateService = async (req, res) => {
    try {
        await Service.update(req.body, { where: { id: req.params.serviceId } });
        res.json({ message: "Service updated" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteService = async (req, res) => {
    try {
        await Service.destroy({ where: { id: req.params.serviceId } });
        res.json({ message: "Service deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addServicePrice = async (req, res) => {
    try {
        const priceOption = await ServicePrice.create({ 
            duration: req.body.duration, 
            price: req.body.price, 
            type: req.body.type, 
            serviceId: req.body.serviceId 
        });
        res.json(priceOption);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
