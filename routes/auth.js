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
            else {<!DOCTYPE html>const express = require('express')
const User = require('../models/user')
const router = express.Router();

var myEmail = [];

router.get('/login', async (req, res) => {
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

    await data.forEach((account) => {
        if (username == account.username) {
            if (password == account.password) {
                req.session.isLoggedIn = true;
                if (pilihan === 'Mahasiswa') {
                    res.redirect('/home');
                } else if (pilihan === 'Admin') {
                    res.redirect('/admin/adminHome');
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
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pengisian KRRS Online</title>
  <link rel="stylesheet" href="assets/Style.css">
</head>

<body>
  <div class="bg_image">
    <div class="header">
      <img src="images/untarputih.png" alt="logo" style="width: 50px; margin-left: 8%; margin-top: 3px;">
      <h1 style="margin-top: -60px; margin-left: 500px; font-size: 30pt; color:white;">Pengisian KRRS Online</h1>
    </div>
  </div>
  <div class="center" style="margin-left: -28%; margin-top: 3%; height:250px; ">
    <form method="post" action="/auth/cekEmail" style="padding-top: 50px;">
      <label for="email" style="font-weight: bolder;">Masukkan Email</label>
      <input type="text" id="email" name="email" placeholder="Email">
      <a href="/auth/login" style="color:#A01627; font-size: 10pt; text-decoration: none">Kembali ke login page</a>
      <div style="margin-top:22px; margin-left:135px; ">
        <input type="submit" value="continue"
          style="background-color:#A01627; color:white; font-size: 13pt; width:175px;">
      </div>
    </form>
    <% if(locals.error) { %>
      <span class="text-danger pl-2" style="font-size: 2.2vh; margin-left: 5%;">
        <%= error %>
      </span>
      <% } %>
  </div>
</body>

</html>
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
                if (NewPassword == ConfirmPassword) {
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
