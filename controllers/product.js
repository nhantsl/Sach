const { getAllBooks, getNav, addBook, removeBook, getBooksPaginated } = require('../models/db');

function getBooks(req, res) {
    const categoryId = req.query.idCategory;
    const query = req.query.que;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;

    getAllBooks((err, allProducts) => {
        if (err) {
            return res.status(500).json({ message: 'Lỗi khi lấy sách', error: err });
        }

        let products = allProducts;

        if (categoryId) {
            products = products.filter(product => product.idCategory == categoryId);
        }
        if (query) {
            products = products.filter(product => 
                product.nameProduct.toLowerCase().includes(query.toLowerCase())
            );
        }

        getNav((err, catalogs) => { 
            if (err) {
                return res.status(500).json({ message: 'Lỗi khi lấy danh mục', error: err });
            }

            if (!products || products.length === 0) {
                return res.render('home', { 
                    message: 'Không có dữ liệu sản phẩm.',
                    products: products || [],
                    catalogs,
                    user: req.session.user || null
                });
            }

            const offset = (page - 1) * limit;
            const paginatedProducts = products.slice(offset, offset + limit);
            const totalPages = Math.ceil(products.length / limit);
            
            res.render('home', {
                products: paginatedProducts,
                catalogs: catalogs,
                currentPage: page,
                totalPages: totalPages,
                user: req.session.user || null
            });
        });
    });
}

function addB (req, res){
    const { nameProduct , priceProduct , images } = req.body;

    addBook(nameProduct, priceProduct, images, (err, results) => {
        if (err) {
            console.error('Lỗi từ model:', err.message);
            return res.status(400).send(err.message);
        }
        res.redirect('/');
    });
};

function removeB(req, res) {
    const idProduct = req.params.id;

    if (!idProduct) {
        return res.status(400).json({ message: 'ID sản phẩm không hợp lệ.' });
    }

    removeBook(idProduct, (err, results) => {
        if (err) {
            console.error('Xóa sách thất bại:', err);
            return res.status(500).json({ message: 'Lỗi khi xóa sách', error: err });
        }

        console.log('Xóa sách thành công:', results);
        res.redirect('/removebook');
    });
}

module.exports = { getBooks, addB, removeB };