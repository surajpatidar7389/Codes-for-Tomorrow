const express = require('express');
const {verifyToken} = require('../middleware/auth.middleware');
const {createCategory, getCategories, getCategoryById, updateCategories, deleteCategory} = require('../controllers/category.controller');
"../controllers/category.controller";

const router = express.Router();

router.post('/category', verifyToken, createCategory);
router.get('/categories', verifyToken, getCategories);
router.put('/category/:categoryId', verifyToken,updateCategories);
router.delete('/category/:categoryId', verifyToken, deleteCategory);

module.exports = router;