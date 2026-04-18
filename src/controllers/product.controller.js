import { addBook, removeBook, getNav, getAllBooks } from '../../models/db.js';
import getProducts from '../services/product.service.js';


async function getBooks(req, res) {
    try {
        const catalogs = await getNav();
        const result = await getProducts(req.query);
        const cart = req.session.cart || [];
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

        res.render('home', {
             ...result,
            catalogs,
            user: req.session.user || null,
            cartCount
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Lỗi server' });
    }
}

async function addB(req, res) {
    try {
        const { nameProduct, priceProduct, images, idCategory } = req.body;

        await addBook(nameProduct, priceProduct, images, idCategory);

        res.redirect('/');
    } catch (err) {
        console.error('Lỗi từ model:', err.message);
        res.status(400).send(err.message);
    }
}

async function getRemoveB (req, res) {
    try {
        const products = await getAllBooks();

        res.render('removebook', {
            products
        });

    } catch (err) {
        res.status(500).send('Lỗi server');
    }
};

async function removeB(req, res) {
    try {
        const idProduct = req.params.id;

        if (!idProduct) {
           return res.status(400).json({ message: 'ID sản phẩm không hợp lệ.' });
        }
        const results = await removeBook(idProduct);

        console.log('Xóa sách thành công:', results);
        res.redirect('/removebook');

    } catch (err) {
        console.error('Xóa sách thất bại:', err);
        res.status(500).json({ message: 'Lỗi khi xóa sách', error: err });
    }
}

export { addB, removeB, getBooks, getRemoveB };