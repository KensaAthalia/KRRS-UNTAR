const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    //check user session
    res.render('pages/mahasiswa/home');
})

router.get('/home',(req,res) =>{
    res.render('pages/mahasiswa/home');
})

router.get('/login',(req,res) =>{
    res.render('pages/login');
})

router.get('/profil',(req,res) =>{
    res.render('pages/mahasiswa/profil');
})
router.get('/cetak',(req,res) =>{
    res.render('pages/mahasiswa/cetak');
})

router.get('/lintar',(req,res) =>{
    res.render('pages/mahasiswa/lintar');
})

router.get('/status',(req,res) =>{
    res.render('pages/mahasiswa/status');
})

router.get('/krrs',(req,res) =>{
    res.render('pages/mahasiswa/krrs');
})

router.get('/krrs-pengisian',(req,res) =>{
    res.render('pages/mahasiswa/krrs-pengisian');
})

router.get('/krrs-reguler',(req,res) =>{
    res.render('pages/mahasiswa/krrs-reguler');
})

router.get('/panduan',(req,res) =>{
    res.render('pages/mahasiswa/panduan');
})

router.get('/panduanfk',(req,res) =>{
    res.render('pages/mahasiswa/panduanfk');
})

router.get('/chatadmin',(req,res) =>{
    res.render('pages/mahasiswa/chatadmin');
})

router.get('/historychat',(req,res) =>{
    res.render('pages/mahasiswa/historychat');
})

router.get('/lihatjawaban',(req,res) =>{
    res.render('pages/mahasiswa/lihatjawaban');
})

router.get('/gantipass',(req,res) =>{
    res.render('pages/mahasiswa/gantipass');
})

module.exports = router;