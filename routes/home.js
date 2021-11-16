const express = require('express')
const router = express.Router()
const bioUser = require('../models/bioUser')

router.get('/',(req,res) =>{
    //check user session
    const isNotLoggedIn = !req.session.user;
    if(isNotLoggedIn){
        res.redirect('/auth/login');
    }
    else{
        res.render('pages/home');
    }
})

router.get('/home',(req,res) =>{
    res.render('pages/mahasiswa/home');
})

router.get('/login',(req,res) =>{
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

router.get('/profil',(req,res) =>{
    res.render('pages/mahasiswa/profil');
})

router.post('/profil', async (req,res) => {
    let item = new bioUser({
        nomorPokokMahasiswa : req.body.nomorPokokMahasiswa,
        namaMhs : req.body.namaMhs,
        noRek : req.body.noRek,
        ttl : req.body.ttl,
        jk : req.body.jk,
        agama : req.body.agama,
        alamat : req.body.alamat,
        noTelp : req.body.noTelp,
        noHP : req.body.noHP,
        email : req.body.email,
        asalSekolah : req.body.asalSekolah,
        noIjazah : req.body.noIjazah,
        tglIjazah : req.body.tglIjazah,
        namaOrtu : req.body.namaOrtu,
        alamatOrtu : req.body.alamatOrtu,
        telpOrtu : req.body.telpOrtu,
    })

    try {
        await item.save()
        res.render('pages/mahasiswa/profil', { saved_successfully:"Data anda berhasil di simpan!"});
    } catch (e) {
        res.render('pages/mahasiswa/profil', {VARIABLE_ERROR: "ERROR"});
        }
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