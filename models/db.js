import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config({quiet: true});

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port : process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);

db.query('SELECT 1')
  .then(() => console.log('DB CONNECT OK ✅'))
  .catch(err => console.log('DB ERROR ❌', err));

const getAllBooks = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM book_products');
        return rows;
    } catch (err) {
        console.error('Lỗi khi lấy sách:', err);
        throw err;
    }
};

const getBooksPaginated = async (page, limit) => {
    try {
        const offset = (page - 1) * limit;

        const [[{ total }]] = await db.query(
            'SELECT COUNT(*) AS total FROM book_products'
        );

        const [books] = await db.query(
            'SELECT * FROM book_products LIMIT ? OFFSET ?',
            [limit, offset]
        );

        return {
            totalBooks: total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            books
        };
    } catch (err) {
        console.error('Lỗi:', err);
        throw err;
    }
};

const getNav = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM book_catalog');
        return rows;
    } catch (err) {
        console.error('Lỗi:', err);
        throw err;
    }
};

const addBook = async (nameProduct, priceProduct, images, idCategory) => {
    try {
        const [result] = await db.query(
            'INSERT INTO book_products (nameProduct, priceProduct, images, idCategory) VALUES (?, ?, ?, ?)',
            [nameProduct, priceProduct, images, idCategory]
        );
        return result;
    } catch (err) {
        console.error('Lỗi thêm sách:', err);
        throw err;
    }
};

const removeBook = async (idProduct) => {
    try {
        const [result] = await db.query(
            'DELETE FROM book_products WHERE idProduct = ?',
            [idProduct]
        );
        return result;
    } catch (err) {
        console.error('Lỗi:', err);
        throw err;
    }
};

const getUser = async (username, password) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM book_tbluser WHERE username = ? AND password = ?',
            [username, password]
        );
        return rows;
    } catch (err) {
        console.error('Lỗi user:', err);
        throw err;
    }
};

const getBooksAdvanced = async ({ page, limit, idCategory, search }) => {
    try {
        let query = 'SELECT * FROM book_products WHERE 1=1';
        let countQuery = 'SELECT COUNT(*) as total FROM book_products WHERE 1=1';
        let params = [];

        // filter category
        if (idCategory) {
            query += ' AND idCategory = ?';
            countQuery += ' AND idCategory = ?';
            params.push(idCategory);
        }

        // search
        if (search) {
            query += ' AND nameProduct LIKE ?';
            countQuery += ' AND nameProduct LIKE ?';
            params.push(`%${search}%`);
        }

        // pagination
        const offset = (page - 1) * limit;
        query += ' LIMIT ? OFFSET ?';
        params.push(limit, offset);

        // chạy query
        const [rows] = await db.query(query, params);

        // count total
        const [countRows] = await db.query(
            countQuery,
            params.slice(0, params.length - 2) // bỏ limit offset
        );

        const total = countRows[0].total;

        return {
            products: rows,
            totalPages: Math.ceil(total / limit) || 1,
            currentPage: page
        };

    } catch (err) {
        console.error('Lỗi getBooksAdvanced:', err);
        throw err;
    }
};

export { db, getAllBooks, getNav, addBook, removeBook, getBooksPaginated, getUser, getBooksAdvanced};
export const PORT = process.env.PORT || 3000;
