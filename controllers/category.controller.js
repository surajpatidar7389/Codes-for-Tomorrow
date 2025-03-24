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
    try {
        const {categoryId} = req.params;
        await Category.update({name :req.body.name}, {where: {id: categoryId}});
        res.json({message: 'Category updated'});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const {categoryId} = req.params;
        const category = await Category.findByPk(categoryId,{include: 'Service'});
        if(!category || category.Services.length > 0){
            return res.status(400).json({message: 'Category cannot be deleted'});
        }
        await Category.destroy({where: {id: categoryId}});
        res.json({message: 'Category deleted'});
        
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



