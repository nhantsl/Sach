import express from 'express';
const router = express.Router();
import { getBooks, getRemoveB, removeB, addB } from '../src/controllers/product.controller.js';
import methodOverride from 'method-override';
router.use(methodOverride('_method'));
import requireRole from '../src/middlewares/role.middleware.js';

router.get('/', getBooks);

router.get('/addbook', requireRole(1), (req, res) => {
    res.render('addbook');
});

router.post('/addbook', requireRole(1), addB)

router.get('/removebook', requireRole(1), getRemoveB)

router.delete('/removebook/:id',requireRole(1), removeB);

export default router;