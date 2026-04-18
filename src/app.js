import express from 'express';
const app = express();

import session from 'express-session';

import bookRoutes from '../routes/bookRoutes.js';
import cartRoutes from '../routes/cartRoutes.js';
import morgan from 'morgan';


// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET || 'my-secret-key',
    resave: false,
    saveUninitialized: false
}));

// routes
app.use('/', bookRoutes);
app.use('/cart', cartRoutes);

// view engine
app.set('view engine', 'ejs');

// static
app.use(express.static('public'));

export default app;