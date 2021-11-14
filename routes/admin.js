const express = require('express');
const dosen = require('../models/dosen');
const matkul = require('../models/matkul');
const router = express.Router()

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

router.get('/DataMatkul',async(req,res) =>{
    var data = await matkul.find();
    res.render('pages/admin/DataMatkul',{layout:'layouts/admin',matkuls:data});
})

router.get('/datamatkuledit',(req,res) =>{
    res.render('pages/admin/datamatkuledit',{layout:'layouts/admin'});
})

router.get('/Matkultambah',(req,res) =>{
    res.render('pages/admin/Matkultambah',{layout:'layouts/admin'});
})

router.get('/DataDosen',async(req,res) =>{
    var datadosen = await dosen.find();
    res.render('pages/admin/DataDosen',{layout:'layouts/admin',dosens:datadosen});
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