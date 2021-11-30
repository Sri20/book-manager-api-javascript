const express = require('express');
const {booksController} = require('../controllers');
const router = new express.Router();
/**
 * swagger
 * /api/v1/books:
 *  get:
 *    summary: Get all books
 *    responses:
 *      200:
 *        description: An array of books
 *  put:
 *    summary: create a book record
 *    responses:
 *      201:
 *        description: added new book record
*/

router.get('/books', booksController.getBooks);
router.get('/books/:bookId', booksController.getBook);
router.post('/books', booksController.saveBook);

// User Story 4 - Update Book By Id Solution
router.put('/books/:bookId', booksController.updateBook);

// User story 5 - delete book by Id 

router.delete('/books/:bookId', booksController.deleteBook);


module.exports = router;
