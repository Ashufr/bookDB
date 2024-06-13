import express from 'express';
import { createBook, createMultipleBooks, getAllBooks, getBookViaIsbn } from '../controller/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/isbn/:isbn', getBookViaIsbn);
router.post('/', createBook);
router.post('/multiple', createMultipleBooks);

export default router;