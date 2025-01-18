const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();

/* EJS */
app.use(expressLayouts);
app.set('view engine', 'ejs');

/* ROUTES */
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));



const port = -process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Sunucu ${port} 'unda çalışıyor`);
});