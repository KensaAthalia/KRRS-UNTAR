const express = require('express')
const router = express.Router()
const bioUser = require('../models/bioUser')
const chatadmin = require('../models/chatadmin')
const matkul = require('../models/matkul')

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
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/home',{
        namaUser:Nama,
        nim:NIM
    });
    console.log('Nama:'+Nama)
})

router.get('/profil',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/profil',{
        namaUser:Nama,
        nim:NIM
    });
})

router.post('/profil', async (req,res) => {
    var Nama = req.session.user;
    var NIM = req.session.nim;
    const myBio = new bioUser({
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
    myBio.save((error,savedUser)=>{
        if(error) throw error
        console.log('Data Tersimpan');
    })
    res.render('pages/mahasiswa/profil',{
        saved_successfully:'Data Tersimpan',
        namaUser:Nama,
        nim:NIM
    })
})

router.get('/cetak',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/cetak',{
        namaUser:Nama,
        nim:NIM
    });
})

router.get('/lintar',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/lintar',{
        namaUser:Nama,
        nim:NIM
    });
})

router.get('/status',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/status',{
        namaUser:Nama,
        nim:NIM
    });
})

router.get('/krrs',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/krrs',{
        namaUser:Nama,
        nim:NIM
    });
})

router.get('/krrs-pengisian',async(req,res) =>{
    var Matkul = await matkul.find();
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/krrs-pengisian',{
        matkuls:Matkul,
        namaUser:Nama,
        nim:NIM
    });
})

router.get('/krrs-reguler',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/krrs-reguler',{
        namaUser:Nama,
        nim:NIM
    });
})

router.get('/panduan',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/panduan',{
        namaUser:Nama,
        nim:NIM
    });
})

router.get('/panduanfk',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/panduanfk',{
        namaUser:Nama,
        nim:NIM
    });
})

router.get('/chatadmin',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/chatadmin',{
        chatadmins:chatadmin,
        namaUser:Nama,
        nim:NIM
    });
})

router.post('/chatadmin', async (req,res) => {
    try {
        var myChat = new chatadmin({
            pertanyaan:req.body.txtchatadmin
        });
        myChat.save()
        console.log('saved')
        
    } catch (error) {
        res.redirect('/chatadmin')
        return console.log ('error',error);
    }
    finally{
        console.log('Message Posted')
    }
    res.redirect('/chatadmin')
})

router.get('/historychat',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/historychat',{
        namaUser:Nama,
        nim:NIM
    });
})

router.get('/lihatjawaban',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/lihatjawaban',{
        namaUser:Nama,
        nim:NIM
    });
})

router.get('/gantipass',(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    res.render('pages/mahasiswa/gantipass',{
        namaUser:Nama,
        nim:NIM
    });
})

module.exports = router;
