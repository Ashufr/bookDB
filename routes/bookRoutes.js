import express from 'express';
import { createBook, createMultipleBooks, getBookViaIsbn } from '../controller/bookController.js';

const router = express.Router();

router.get('/isbn/:isbn', getBookViaIsbn);
router.post('/', createBook);
router.post('/multiple', createMultipleBooks);

export default router;