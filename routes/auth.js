const express = require('express')
const User = require('../models/user')
const router = express.Router();

router.get('/login', async (req, res) => {
    res.render('pages/login',{layout:false});
})

router.get('/lupapass',(req,res) =>{
    res.render('pages/lupapass',{layout:false});
})
router.get('/lupapass2',(req,res) =>{
    res.render('pages/lupapass2',{layout:false});
})
router.get('/lupapass3',(req,res) =>{
    res.render('pages/lupapass3',{layout:false});
})
router.get('/lupapass4',(req,res) =>{
    res.render('pages/lupapass4',{layout:false});
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
                res.render('pages/login', {layout:false,error: 'Wrong Email or Password!'})
            }
        }
    })
})

router.post('/forgot', async (req,res) => {
    const email = req.body.email;

    data = await User.find();

    await data.forEach((account) => {
        if (email == account.email) {
            res.redirect('/lupapass3');
                if (password.NewPassword == ConfirmPassword) {
                    account.password == NewPassword;
                    account.save((error,savedUser)=>{
                        if(error) throw error
                        res.redirect('/lupapass4');
                    })
                 }else {
                    res.render('/lupapass2', {layout:false,error: 'Password is not match'})
                    }
        }
    })
})


module.exports = router;
