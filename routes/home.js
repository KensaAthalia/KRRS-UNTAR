const express = require('express')
const router = express.Router()
const bioUser = require('../models/bioUser')
const chatadmin = require('../models/chatadmin')
const matkul = require('../models/matkul')
const krrs = require('../models/krrs')

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
    var isSimpan = false;
    myBio.save((error,savedUser)=>{
        if(error) {console.log(error)}
        else{isSimpan=true;console.log('Data Tersimpan:'+savedUser);}
    })
    if (isSimpan) {
        res.render('pages/mahasiswa/profil',{
            saved_successfully:'Data Tersimpan',
            namaUser:Nama,
            nim:NIM
        })
    } else {
        res.render('pages/mahasiswa/profil',{
            saved_successfully:'Data tidak Tersimpan',
            namaUser:Nama,
            nim:NIM
        })
    }
   
})

router.get('/cetak',async(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    var dataKrrs = await krrs.find({nim:NIM});
    var arrMatkul = []
    dataKrrs.forEach((data)=>{
        arrMatkul.push(data.matkul)
    })
    var dataMatkul = []
    for (let i = 0; i < arrMatkul.length; i++) {
        temp = await matkul.find({kode:arrMatkul[i]})
        dataMatkul.push(temp)
    }
    var Matkul = await matkul.find();
    res.render('pages/mahasiswa/cetak',{
        DataKrrs:dataKrrs,
        matkuls:Matkul,
        namaUser:Nama,
        nim:NIM,
        DataMatkul:dataMatkul
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
var hasilKuliah;
router.get('/krrs-pengisian',async(req,res) =>{
    var pilKelas = req.query.pilKelas;
    var Nama = req.session.user;
    var NIM = req.session.nim;
    var dataKrrs = await krrs.find({nim:NIM});
    var arrMatkul = []
    dataKrrs.forEach((data)=>{
        arrMatkul.push(data.matkul)
    })
    console.log(arrMatkul)
    var dataMatkul = []
    for (let i = 0; i < arrMatkul.length; i++) {
        console.log(arrMatkul[i])
        temp = await matkul.find({kode:arrMatkul[i]})
        dataMatkul.push(temp)
        console.log(dataMatkul[i])
    }
        
    
    console.log('DataKRRS '+dataKrrs)
    var Matkul = await matkul.find();
    var pilMatkul = req.query.pilMatkul;
    hasilKuliah = req.query.pilMatkul;
    console.log('Hasil:'+hasilKuliah)
    
    var selMatkul = await matkul.find({kode: pilMatkul})
    console.log('route Pilihan: '+pilMatkul+' '+pilKelas)
    res.render('pages/mahasiswa/krrs-pengisian',{
        DataKrrs:dataKrrs,
        matkuls:Matkul,
        namaUser:Nama,
        nim:NIM,
        pilMatkul:pilMatkul,
        pilKelas:pilKelas,
        selectMatkul:selMatkul,
        selectKelas:pilKelas,
        kelas:pilKelas,
        DataMatkul:dataMatkul
    });
})

router.post('/simpanKrrs/',async(req,res) =>{
    var hsMatkul = req.body.pilMatkul;
    var hsKelas = req.body.piKelas;
    var NIM = req.session.nim;
    console.log('pilihan:'+hasilKuliah+' '+hsKelas)
    const data = await krrs.exists({nim:NIM})
    if(data){
        var existKrrs = await krrs.findOneAndUpdate(
            {nim:NIM},
            {$push:{matkul:hasilKuliah,kelas:hsKelas}},
            {new:true})
        console.log('Data terupdate')
    }else{
        myKrrs = new krrs({
            nim:NIM,
            matkul:[hasilKuliah],
            kelas:[hsKelas]
        })
        myKrrs.save((error,savedMatkul)=>{
            if(error){
                    throw error;
            } else{
                console.log('Data Tersimpan');
            }
                
            })
    }
    res.redirect('/krrs-pengisian')
})

router.get('/hapusKrrs/:Kode/:kelas',async(req,res)=>{
    const myKode = req.params.Kode
    const myKelas = req.params.kelas
    var NIM = req.session.nim;
    console.log('Kode:'+myKode+' '+myKelas)
    /*await krrs.findOneAndUpdate(
        {nim:NIM},
        {$pop:{matkul:myKode,kelas:myKelas}},
        {new:true})
        */
    res.redirect('/krrs-pengisian')
})


router.get('/krrs-reguler',async(req,res) =>{
    var Nama = req.session.user;
    var NIM = req.session.nim;
    var dataKrrs = await krrs.find({nim:NIM});
    var arrMatkul = []
    dataKrrs.forEach((data)=>{
        arrMatkul.push(data.matkul)
    })
    console.log(arrMatkul)
    var dataMatkul = []
    for (let i = 0; i < arrMatkul.length; i++) {
        console.log(arrMatkul[i])
        temp = await matkul.find({kode:arrMatkul[i]})
        dataMatkul.push(temp)
        console.log(dataMatkul[i])
    }
    console.log('DataKRRS '+dataKrrs)
    var Matkul = await matkul.find();
    res.render('pages/mahasiswa/krrs-reguler',{
        namaUser:Nama,
        nim:NIM,
        DataKrrs:dataKrrs,
        DataMatkul:dataMatkul
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
