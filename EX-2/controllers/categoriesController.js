import {articles,categories} from '../models/data.js'

const getAllCategories = (req,res) => {
    res.status(200).json(categories);
}

const getCategoriesById = (req,res) => {
    const categoryId = parseInt(req.params.id)
    const category = categories.find(j => j.id === categoryId)
    if(!category)res.status(404).json({message: 'Category not found'});
    res.status(200).json(category);
}

const createCategory = (req,res) => {
    const {name} = req.body;
    if(!name)res.status(400).json({ error: 'Name is required' });
    const newCategory = {
        id: categories.length + 1,
        name
    }
    categories.push(newCategory);
    res.status(201).json(newCategory);
}

const updateCategory = (req,res) => {
    const categoryId = parseInt(req.params.id);
    const {name} = req.body;
    const category = categories.find(j => j.id === categoryId)
    if(!category) return res.status(404).json({ error: 'Category not found' });

    name ? (category.name = name) : res.status(400).json({ error: 'Name is required' });
    res.status(200).json(category);
}

const deleteCategory = (req,res) => {
    const categoryId = parseInt(req.params.id)
    const index = categories.findIndex(j => j.id === categoryId)
    if(index=== -1)return res.status(404).json({ error: 'Category not found' });
    categories.splice(index,1);
    res.status(204).send();
}

const getArticleByCategoryId = (req,res) => {
    const categoryId = parseInt(req.params.id)
    const categoryArticle = articles.filter(a => a.categoryId === categoryId)
    if(!categoryArticle) return res.status(404).json({ error: 'Category not found' });
    res.status(200).json(categoryArticle);
}
export {getAllCategories,getCategoriesById,createCategory,updateCategory,deleteCategory,getArticleByCategoryId};