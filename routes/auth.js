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
            else {<!DOCTYPE html>
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
