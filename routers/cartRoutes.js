const express = require('express');
const router = express.Router();
const db = require('../models/db');
const session = require('express-session');

router.use(session({
    secret: '1',
    resave: false,
    saveUninitialized: true
}));
router.use(express.json());
router.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
});

router.get('/api', (req, res) => {
    const cart = req.session.cart || [];
    res.json({ cart });
});

router.get('/', (req, res) => {
    const user = req.session.user;
    if (!req.session.user || user.rule === 1) {
        return res.status(401).json({ message: 'Vui lòng đăng nhập để vào giỏ hàng.' });
    }
    const cart = req.session.cart || [];
    res.render('cart', { cart });
});

router.post('/add', (req, res) => {    
    const { productId, nameProduct, priceProduct, image, quantity } = req.body;
    const user = req.session.user;
    if (!req.session.user || user.rule === 1) {
        return res.status(401).json({ message: 'Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.' });
    }

    const existingItem = req.session.cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity; 
    } else {
        const cartItem = {
            productId,
            quantity,
            name: nameProduct,
            price: priceProduct,
            image: image
        };
        req.session.cart.push(cartItem);
    }

    res.json({
        message: 'Sản phẩm đã được thêm vào giỏ hàng!',
        cart: req.session.cart,
        cartCount: req.session.cart.reduce((total, item) => total + item.quantity, 0)
    });
});

router.put('/update', (req, res) => {
    const { productId, quantity } = req.body;

    const productIndex = req.session.cart.find(item => item.productId === productId);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Sản phẩm không tồn tại trong giỏ hàng.' });
    }

    productIndex.quantity = quantity;

    res.json({ success: true, cart: req.session.cart });
});

router.delete('/remove', (req, res) => {
    const { productId } = req.body;

    if (req.session.cart) {
        req.session.cart = req.session.cart.filter(item => item.productId !== productId);

        res.json({
            message: 'Sản phẩm đã được xóa khỏi giỏ hàng!',
            cart: req.session.cart
        });
    } else {
        res.json({
            message: 'Giỏ hàng hiện tại trống!',
            cart: []
        });
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.getuser(username, password, (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn người dùng:', err);
            return res.status(500).json({ message: 'Lỗi máy chủ, vui lòng thử lại sau.' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng.' });
        }
        const user = results[0];
        req.session.user = user;
        res.json({ message: 'Đăng nhập thành công' });
    });
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Lỗi khi đăng xuất.' });
        }
        res.redirect('/');
    });
});

module.exports = router;