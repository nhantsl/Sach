const express = require('express');
const router = express.Router();
const booksController = require('../controllers/product');
const db = require('../models/db');
const methodOverride = require('method-override');
router.use(methodOverride('_method'));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', booksController.getBooks);

router.get('/addbook', (req, res) => {
    res.render('addbook');
});
router.post('/addbook', booksController.addB)

router.get('/removebook', (req, res) => {
    db.getAllBooks((err, products) => {
        if (err) {
            console.error('Lỗi khi lấy danh sách sách:', err);
            return res.status(500).send('Không thể lấy danh sách sách');
        }
        res.render('removebook', { products });
    });
});

router.delete('/removebook/:id', booksController.removeB);

module.exports = router;