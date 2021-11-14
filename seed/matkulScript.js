const mongoose = require('mongoose');
const matkul = require('../models/matkul');
const Matkul = require('../models/matkul')

mongoose.connect(('mongodb+srv://admin:UNTAR2020@cluster0.nu6km.mongodb.net/KRRS?retryWrites=true&w=majority')
,(err,res) => {
    if(err){
        console.error(err);
    }
    else{
        console.log('Database Terhubung untuk seeding');
    }
})

const matkuls = [
    new Matkul({
        kode: 'TK23015',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'WEB PROGRAMMING',
        sks: 8,
        semester: 'GANJIL',
    }),
    new Matkul({
        kode: 'TK23016',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'COMPUTER SYSTEMS',
        sks: 6,
        semester: 'GANJIL',
    }),
    new Matkul({
        kode: 'TK23017',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'INTRODUCTION TO OPERATING SYSTEMS',
        sks: 4,
        semester: 'GANJIL',
    }),
    new Matkul({
        kode: 'TK33010',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'DISTRIBUTED SYSTEMS',
        sks: 4,
        semester: 'GANJIL',
    }),
    new Matkul({
        kode: 'TK13019',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'COMPUTATION I',
        sks: 4,
        semester: 'GANJIL',
    }),
    new Matkul({
        kode: 'TK13020',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'INTRODUCTION TO ALGORITHMS',
        sks: 8,
        semester: 'GANJIL',
    }),
    new Matkul({
        kode: 'TK13021',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'DATABASE SYSTEMS',
        sks: 4,
        semester: 'GANJIL',
    }),
    new Matkul({
        kode: 'TK13022',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'IT TRENDS',
        sks: 4,
        semester: 'GANJIL',
    }),
    new Matkul({
        kode: 'TK13023',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'COMPUTATION II',
        sks: 8,
        semester: 'GENAP',
    }),
    new Matkul({
        kode: 'TK13024',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'DATA STRUCTURES',
        sks: 6,
        semester: 'GENAP',
    }),
]

var done = 0;
for (var i = 0; i < matkuls.length; i++) {
    matkuls[i].save((err, res) => {
        done++;
        if(done == matkuls.length) {
            console.log('Berhasil tersimpan!');
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}
