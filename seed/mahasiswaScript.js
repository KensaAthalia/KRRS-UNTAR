const mongoose = require('mongoose');
const mahasiswa = require('../models/mahasiswa');
const Mahasiswa = require('../models/mahasiswa')

mongoose.connect(('mongodb+srv://admin:UNTAR2020@cluster0.nu6km.mongodb.net/KRRS?retryWrites=true&w=majority')
,(err,res) => {
    if(err){
        console.error(err);
    }
    else{
        console.log('Database Terhubung untuk seeding');
    }
})

const mahasiswas = [
    new mahasiswa({
        nim: 535200001,
        nama: 'DAMEETHIA ANGELINE',
        prodi: 'TEKNIK INFORMATIKA',
        
    }),
    new mahasiswa({
        nim: 535200006,
        nama: 'VENNY CYNTIA',
        prodi: 'TEKNIK INFORMATIKA',
        
    }),
    new mahasiswa({
        nim: 535200014,
        nama: 'KENSA ATHALIA',
        prodi: 'TEKNIK INFORMATIKA',
        
    }),
    new mahasiswa({
        nim: 535200019,
        nama: 'JAMES SUGIARTO EFFENDY',
        prodi: 'TEKNIK INFORMATIKA',
        
    }), 
]

var done = 0;
for (var i = 0; i < mahasiswas.length; i++) {
    mahasiswas[i].save((err, res) => {
        done++;
        if(done == mahasiswas.length) {
            console.log('Berhasil tersimpan!');
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}