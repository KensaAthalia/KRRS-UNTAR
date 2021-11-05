const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    //check user session
    res.render('pages/login',{layout:false});
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

router.get('/adminHome',(req,res) =>{
    //check user session
    res.render('pages/admin/adminHome',{layout:'layouts/admin'});
})
router.get('/krrsmasuk',(req,res) =>{
    res.render('pages/admin/krrsmasuk',{layout:'layouts/admin'});
})
router.get('/masukdetail',(req,res) =>{
    res.render('pages/admin/masukdetail',{layout:'layouts/admin'});
})
router.get('/masukdetaildetail',(req,res) =>{
    res.render('pages/admin/masukdetaildetail',{layout:'layouts/admin'});
})

router.get('/pertanyaanmahasiswa',(req,res) =>{
    res.render('pages/admin/pertanyaanmahasiswa',{layout:'layouts/admin'});
})
router.get('/Pertanyaanmahasiswalihatjwbn',(req,res) =>{
    res.render('pages/admin/Pertanyaanmahasiswalihatjwbn',{layout:'layouts/admin'});
})
router.get('/mahasiswabelumterjawab',(req,res) =>{
    res.render('pages/admin/mahasiswabelumterjawab',{layout:'layouts/admin'});
})

router.get('/DataMatkul',(req,res) =>{
    res.render('pages/admin/DataMatkul',{layout:'layouts/admin'});
})

router.get('/datamatkuledit',(req,res) =>{
    res.render('pages/admin/datamatkuledit',{layout:'layouts/admin'});
})

router.get('/Matkultambah',(req,res) =>{
    res.render('pages/admin/Matkultambah',{layout:'layouts/admin'});
})

router.get('/DataDosen',(req,res) =>{
    res.render('pages/admin/DataDosen',{layout:'layouts/admin'});
})

router.get('/datadosentambah',(req,res) =>{
    res.render('pages/admin/datadosentambah',{layout:'layouts/admin'});
})

router.get('/datadosenedit',(req,res) =>{
    res.render('pages/admin/datadosenedit',{layout:'layouts/admin'});
})

router.get('/DosenMatkul',(req,res) =>{
    res.render('pages/admin/DosenMatkul',{layout:'layouts/admin'});
})

router.get('/DataMahasiswa',(req,res) =>{
    res.render('pages/admin/DataMahasiswa',{layout:'layouts/admin'});
})
router.get('/datamahasiswatambah',(req,res) =>{
    res.render('pages/admin/datamahasiswatambah',{layout:'layouts/admin'});
})
router.get('/datamahasiswaedit',(req,res) =>{
    res.render('pages/admin/datamahasiswaedit',{layout:'layouts/admin'});
})

router.get('/DataKHS',(req,res) =>{
    res.render('pages/admin/DataKHS',{layout:'layouts/admin'});
})
router.get('/datakhsdetail',(req,res) =>{
    res.render('pages/admin/datakhsdetail',{layout:'layouts/admin'});
})
router.get('/khsinput',(req,res) =>{
    res.render('pages/admin/khsinput',{layout:'layouts/admin'});
})

router.get('/DataKRS',(req,res) =>{
    res.render('pages/admin/DataKRS',{layout:'layouts/admin'});
})
router.get('/datakrsdetail',(req,res) =>{
    res.render('pages/admin/datakrsdetail',{layout:'layouts/admin'});
})
router.get('/datakrstambah',(req,res) =>{
    res.render('pages/admin/datakrstambah',{layout:'layouts/admin'});
})

module.exports = router;