const express = require('express');
const router = express.Router();


/* REGISTER PAGE */
router.get('/register', (req, res) => {
    res.render('register');
});


/* LOGİN PAGE */
router.get('/login', (req, res) => {
    res.render('login');
});



module.exports = router;