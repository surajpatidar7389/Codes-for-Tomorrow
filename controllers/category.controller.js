const Category = require('../models/category.model');

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create({name: req.body.name});
        res.status(201).json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.updateCategories = async (req, res) => {
    console.log(req.body);
    try {
        const {categoryId} = req.params;
        console.log("categoryId", categoryId);
        await Category.update({name :req.body.name}, {where: {id: categoryId}});
        res.json({message: 'Category updated'});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const {categoryId} = req.params;
        await Category.destroy({where: {id: categoryId}});
        res.json({message: 'Category deleted'});        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



