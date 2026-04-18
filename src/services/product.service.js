import {getBooksAdvanced } from '../../models/db.js';

const getProducts = async (query) => {
    let { page = 1, limit = 8, idCategory, search } = query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 8;

    return await getBooksAdvanced({
        page,
        limit,
        idCategory,
        search
    });
};

export default getProducts;