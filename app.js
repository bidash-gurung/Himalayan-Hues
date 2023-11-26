const express = require('express');
const path = require('path');
const userRouter = require('./routes/userRoutes');
const viewRouter = require('./routes/viewRoutes');
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const feedbackRoutes = require('./routes/feedbackRoutes')
const wishlistRoutes = require('./routes/wishlistRoutes')
const orderRoutes = require('./routes/orderRoutes')


const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Use the userRouter and viewRouter as middleware
app.use('/api/v1/users', userRouter);
app.use('/', viewRouter);

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/cart', cartRoutes)
app.use('/api/v1/feedback', feedbackRoutes)
app.use('/api/v1/wishlist', wishlistRoutes)
app.use('/api/v1/order', orderRoutes)





app.use(express.static(path.join(__dirname, 'views')));


module.exports = app;
