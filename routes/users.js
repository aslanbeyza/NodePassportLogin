const express = require('express');
const router = express.Router();


/* REGISTER PAGE */
router.get('/register', (req, res) => {
    res.send('Register');
});


/* LOGİN PAGE */
router.get('/login', (req, res) => {
    res.send('Login');
});



module.exports = router;