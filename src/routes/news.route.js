import express from 'express';

import newsController from '../controllers/news.controller.js';

const router = express.Router();

router.post('/', newsController.create);
router.get('/', newsController.findAll);

export default router;
