const express = require('express');
const mahasiswa = require('../models/mahasiswa');
const User = require('../models/user')
const router = express.Router();

var myEmail = [];

router.get('/login', async (req, res) => {
    req.session.destroy();
    res.render('pages/login', {
        layout: false
    });
})

router.get('/lupapass', (req, res) => {
    res.render('pages/lupapass', {
        layout: false
    });
})
router.get('/lupapass2', (req, res) => {
    res.render('pages/lupapass2', {
        layout: false
    });
})
router.get('/lupapass3', (req, res) => {
    res.render('pages/lupapass3', {
        layout: false
    });
})
router.get('/lupapass4', (req, res) => {
    res.render('pages/lupapass4', {
        layout: false
    });
})

router.get('/logout', async (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/');
})

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const pilihan = req.body.level;
    
    data = await User.find();
    dataMahasiswa = await mahasiswa.find()

    await data.forEach((account) => {
        if (username == account.username) {
            const role = account.role;
            console.log(role)
            if (password == account.password) {
                req.session.isLoggedIn = true;
                req.session.user = account.name;
                req.session.username = username;
                
                dataMahasiswa.forEach((mahasiswa)=>{
                    if(account.name === mahasiswa.nama){
                        req.session.nim = mahasiswa.nim;
                    }
                })
                console.log(req.session.user);
                console.log(req.session.nim);
                if (pilihan === 'Mahasiswa' && role ==='mahasiswa') {
                    res.redirect('/home');
                } else if (pilihan === 'Admin' && role ==='admin') {
                    res.redirect('/admin/adminHome');
                }
                else{
                    res.render('pages/login', {
                        layout: false,
                        error: 'Wrong Email or Password or akses!'
                    })
                }
            } else {
                res.render('pages/login', {
                    layout: false,
                    error: 'Wrong Email or Password!'
                })
            }
        }
    })
})

router.post('/cekEmail', async (req, res) => {
    const reqEmail = req.body.email;
    data = await User.find();
    var isTrue = false;
    await data.forEach((account) => {
        if (reqEmail === account.email) {
            myEmail.push(reqEmail);
            res.redirect('/lupapass2')
            isTrue = true;
        }
    })
    if (!isTrue) {
        res.redirect('/lupapass')
    }
})

router.post('/cekKode', async (req, res) => {
    const reqKode = req.body.kode;
    const cekKode = '60357'
    if (reqKode === cekKode) {
        res.redirect('/lupapass3')
    } else {
        res.redirect('/lupapass2')
    }
})

router.post('/forgot', async (req, res) => {
    const email = myEmail[0];
    console.log('email sekarang: '+email)
    const NewPassword = req.body.passBaru;
    const ConfirmPassword = req.body.passConfirm;
    data = await User.find();
    var isGanti = false;
    await data.forEach((account) => {
        if (email === account.email) {
            if (NewPassword === ConfirmPassword) {
                account.password = NewPassword;
                account.save((error, savedUser) => {
                    if (error) throw error
                    console.log('Data Tersimpan')
                })
                isGanti = true;
            } 
        }
    })
    if(!isGanti){
        res.redirect('/lupapass3')
    }
    else{
        myEmail.length = 0;
        console.log('email sekarang: '+myEmail[0])
        res.redirect('/lupapass4')
    }
    
})



module.exports = router;