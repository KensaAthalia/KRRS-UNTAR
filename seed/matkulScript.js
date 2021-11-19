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
        nosms:3,
        kelas:['A','B','S'],
        ruang:['R0902','R0703'],
        jadwal:['SENIN 09:30 s/d 11:10;SENIN 07:30 s/d 09:10',
                'SELASA 09:30 s/d 11:10;SELASA 07:30 s/d 09:10',
                'RABU 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
    }),
    new Matkul({
        kode: 'TK23016',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'COMPUTER SYSTEMS',
        sks: 6,
        semester: 'GANJIL',
        nosms:3,
        kelas:['A','B','S'],
        ruang:['R0803'],
        jadwal:['RABU 09:30 s/d 11:10;SENIN 07:30 s/d 09:10',
                'KAMIS 09:30 s/d 11:10;SELASA 07:30 s/d 09:10',
                'JUMAT 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
        
    }),
    new Matkul({
        kode: 'TK23017',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'INTRODUCTION TO OPERATING SYSTEMS',
        sks: 4,
        semester: 'GANJIL',
        nosms:3,
        kelas:['A','B','S'],
        ruang:['R0705'],
        jadwal:['SELASA 13:30 s/d 15:10',
                'RABU 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
    }),
    new Matkul({
        kode: 'TK33010',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'DISTRIBUTED SYSTEMS',
        sks: 4,
        semester: 'GANJIL',
        nosms:3,
        kelas:['A','B','S'],
        ruang:['R0805'],
        jadwal:['SENIN 09:30 s/d 11:10;SENIN 07:30 s/d 09:10',
                'SELASA 09:30 s/d 11:10;SELASA 07:30 s/d 09:10',
                'RABU 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
    }),
    new Matkul({
        kode: 'TK13019',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'COMPUTATION I',
        sks: 4,
        semester: 'GANJIL',
        nosms:1,
        kelas:['A','B','S'],
        ruang:['R0806'],
        jadwal:['SENIN 09:30 s/d 11:10;SENIN 07:30 s/d 09:10',
                'SELASA 09:30 s/d 11:10;SELASA 07:30 s/d 09:10',
                'RABU 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
    }),
    new Matkul({
        kode: 'TK13020',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'INTRODUCTION TO ALGORITHMS',
        sks: 8,
        semester: 'GANJIL',
        nosms:1,
        kelas:['A','B','S'],
        ruang:['R0804'],
        jadwal:['SENIN 09:30 s/d 11:10;SENIN 07:30 s/d 09:10',
                'SELASA 09:30 s/d 11:10;SELASA 07:30 s/d 09:10',
                'RABU 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
    }),
    new Matkul({
        kode: 'TK13021',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'DATABASE SYSTEMS',
        sks: 4,
        semester: 'GANJIL',
        nosms:1,
        kelas:['A','B','S'],
        ruang:['R0902'],
        jadwal:['SENIN 09:30 s/d 11:10;SENIN 07:30 s/d 09:10',
                'SELASA 09:30 s/d 11:10;SELASA 07:30 s/d 09:10',
                'RABU 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
    }),
    new Matkul({
        kode: 'TK13022',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'IT TRENDS',
        sks: 4,
        semester: 'GANJIL',
        nosms:1,
        kelas:['A','B','S'],
        ruang:['R0705'],
        jadwal:['SENIN 09:30 s/d 11:10;SENIN 07:30 s/d 09:10',
                'SELASA 09:30 s/d 11:10;SELASA 07:30 s/d 09:10',
                'RABU 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
    }),
    new Matkul({
        kode: 'TK13023',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'COMPUTATION II',
        sks: 8,
        semester: 'GENAP',
        nosms:2,
        kelas:['A','B','S'],
        ruang:['R0803'],
        jadwal:['SENIN 09:30 s/d 11:10;SENIN 07:30 s/d 09:10',
                'SELASA 09:30 s/d 11:10;SELASA 07:30 s/d 09:10',
                'RABU 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
    }),
    new Matkul({
        kode: 'TK13024',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'DATA STRUCTURES',
        sks: 6,
        semester: 'GENAP',
        nosms:2,
        kelas:['A','B','S'],
        ruang:['R0703'],
        jadwal:['SENIN 09:30 s/d 11:10;SENIN 07:30 s/d 09:10',
                'SELASA 09:30 s/d 11:10;SELASA 07:30 s/d 09:10',
                'RABU 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
    }),
    new Matkul({
        kode: 'TK13025',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'BIG DATA',
        sks: 4,
        semester: 'GENAP',
        nosms:2,
        kelas:['A','B','S'],
        ruang:['R0704'],
        jadwal:['SENIN 09:30 s/d 11:10;SENIN 07:30 s/d 09:10',
                'SELASA 09:30 s/d 11:10;SELASA 07:30 s/d 09:10',
                'RABU 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
    }),
    new Matkul({
        kode: 'TK13024',
        prodi: 'TEKNIK INFORMATIKA',
        matakuliah: 'ARTIFICIAL INTELLIGENCE',
        sks: 4,
        semester: 'GENAP',
        nosms:2,
        kelas:['A','B','S'],
        ruang:['R0703','R0803'],
        jadwal:['SENIN 09:30 s/d 11:10;SENIN 07:30 s/d 09:10',
                'SELASA 09:30 s/d 11:10;SELASA 07:30 s/d 09:10',
                'RABU 09:30 s/d 11:10;RABU 07:30 s/d 09:10'
                ],
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
