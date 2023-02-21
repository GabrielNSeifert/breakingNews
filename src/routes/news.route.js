import express from 'express';
const router = express.Router();

import newsController from '../controllers/news.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

router.post('/', authMiddleware, newsController.create);
router.get('/', newsController.findAll);
router.get('/top', newsController.topNews);
router.get('/search', newsController.searchByTitle);
router.get('/byUser', authMiddleware, newsController.byUser)
router.get('/:id', authMiddleware, newsController.findById);
router.patch('/:id', authMiddleware, newsController.update);
router.delete('/:id', authMiddleware, newsController.erase);
router.patch('/like/:id', authMiddleware, newsController.likeNews);
router.patch('/comments/:id', authMiddleware, newsController.addComment);
router.patch('/comments/:id', authMiddleware, newsController.removeComment);
router.patch('/comments/:idNews/:idComment', authMiddleware, newsController.removeComment);

export default router;
