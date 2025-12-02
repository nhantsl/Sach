const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sach'  
});

db.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối tới cơ sở dữ liệu:', err);
        return;
    }
    console.log('Kết nối thành công đến cơ sở dữ liệu MySQL');
});

const getAllBooks = (callback) => {
    db.query('SELECT * FROM book_products', (err, results) => {
        if (err) {
            console.error('Lỗi khi lấy sách:', err);
            return callback(err, null);
        }
        if (!results || results.length === 0) {
            return callback(null, []);
        }
        callback(null, results);
    });
};

const getBooksPaginated = (page, limit, callback) => {
    const offset = (page - 1) * limit;
    const query = 'SELECT * FROM book_products LIMIT ? OFFSET ?';
    const countQuery = 'SELECT COUNT(*) AS total FROM book_products';

    db.query(countQuery, (err, countResults) => {
        if (err) {
            console.error('Lỗi khi đếm sách:', err);
            return callback(err, null);
        }

        const totalBooks = countResults[0].total;

        db.query(query, [limit, offset], (err, results) => {
            if (err) {
                console.error('Lỗi khi lấy sách:', err);
                return callback(err, null);
            }

            callback(null, {
                totalBooks,
                totalPages: Math.ceil(totalBooks / limit),
                currentPage: page,
                books: results,
            });
        });
    });
};

const getNav = (callback) => {
    db.query('SELECT * FROM book_catalog', (err, results) => {
        if (err) {
            console.error('Lỗi: ', err);
            return callback(err, null);
        }
        if (!results || results.length === 0) {
            return callback(null, []); 
        }
        callback(null, results);
    });
};

const addBook = (nameProduct, priceProduct, images, idCategory, callback) => {
    const query = 'INSERT INTO book_products (nameProduct, priceProduct , images, idCategory) VALUES (?, ?, ?, ?)';

    db.query(query, [nameProduct, priceProduct , images, idCategory], (err, results) => {
        if (err) {
            console.error('Lỗi khi thêm sách vào cơ sở dữ liệu:', err);
            return callback(err);
        }
        callback(null, results);
    });
};

const removeBook = (idProduct, callback) => {
    const query = 'DELETE FROM book_products WHERE idProduct = ?';

    db.query(query, [idProduct], (err, results) => {
        if (err) {
            console.error('Lỗi :', err);
            return callback(err);
        }
        callback(null, results);
    });
};

const getuser = (username, password, callback) => {
    db.query('SELECT * FROM book_tbluser WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) {
            console.error('Lỗi khi lấy người dùng:', err);
            return callback(err, null);
        }

        if (!results || results.length === 0) {
            return callback(null, []);
        }

        callback(null, results);
    });
};


module.exports = { db, getAllBooks, getNav, addBook, removeBook, getBooksPaginated, getuser};
