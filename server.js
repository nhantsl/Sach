const express = require('express');
const app = express();
const bookRoutes = require('./routers/bookRoutes');
const cartRoutes = require('./routers/cartRoutes');

const session = require('express-session');

app.use(session({
    secret: '1',
    resave: false,
    saveUninitialized: true
}));

app.use('/', bookRoutes);
app.use('/cart', cartRoutes);

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000, () => {
    console.log('Máy chủ đã khởi động trên cổng 3000');
});

app.use(express.static('public')); 