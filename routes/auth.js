const express = require('express')
const User = require('../models/user')
const router = express.Router();

router.get('/login', async (req, res) => {
    res.render('pages/login',{layout:false});
})

router.get('/logout', async (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/');
})

router.post('/login', async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const pilihan = req.body.level;

    data = await User.find();

    await data.forEach((account) => {
        if (username == account.username) {
            if (password == account.password) {
                req.session.isLoggedIn = true;
                if(pilihan === 'Mahasiswa'){
                    res.redirect('/home');
                }
                else if(pilihan === 'Admin'){
                    res.redirect('/admin/adminHome');
                }
            }
            else {
                res.render('pages/login', {layout:false,error: 'Wrong Password!'})
            }
        }
    })
    res.render('pages/login', {layout:false,error: 'Wrong email or password!'})
})


module.exports = router;