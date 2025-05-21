import {getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle} from '../controllers/controller.js'
import {getAllJournalists,createJournalist,updateJournalist,deleteJournalist,getJournalistById,getJournalistArticles} from '../controllers/jornalistController.js'
import {getAllCategories,getCategoriesById,createCategory,updateCategory,deleteCategory,getArticleByCategoryId} from '../controllers/categoriesController.js'
import express from 'express'

const router = express.Router();
//articles
router.get('/articles', getAllArticles);
router.get('/articles/:id', getArticleById);
router.post('/articles', createArticle);
router.put('/articles/:id', updateArticle);
router.delete('/articles/:id', deleteArticle);
//journalists
router.get('/journalists',getAllJournalists);
router.get('/journalists/:id', getJournalistById);
router.post('/journalists', createJournalist);
router.put('/journalists/:id', updateJournalist);
router.delete('/journalists/:id', deleteJournalist);
router.get('/journalists/:id/articles', getJournalistArticles);
//category
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategoriesById);
router.post('/categories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);
router.get('/categories/:id/articles', getArticleByCategoryId);
export default router;