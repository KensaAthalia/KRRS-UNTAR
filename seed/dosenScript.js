const mongoose = require('mongoose');
const dosen = require('../models/dosen');
const Dosen = require('../models/dosen')

mongoose.connect(('mongodb+srv://admin:UNTAR2020@cluster0.nu6km.mongodb.net/KRRS?retryWrites=true&w=majority')
,(err,res) => {
    if(err){
        console.error(err);
    }
    else{
        console.log('Database Terhubung untuk seeding');
    }
})

const dosens = [
    new Dosen({
        nip: 10393012,
        nama: 'CHAIRISNI LUBIS,Dra.,M.Kom.',
        prodi: 'TEKNIK INFORMATIKA',
        
    }),
    new Dosen({
        nip: 10812001,
        nama: 'JANSON HENDRYLI,S.Kom,M.Kom.	',
        prodi: 'TEKNIK INFORMATIKA',
        
    }),
    new Dosen({
        nip: 10805002,
        nama: 'VINY CHRISTANTI MAWARDI,S.Kom.',
        prodi: 'TEKNIK INFORMATIKA',
        
    }),
    new Dosen({
        nip: 10396060,
        nama: 'BAGUS MULYAWAN,S.Kom,MM',
        prodi: 'TEKNIK INFORMATIKA',
        
    }),
    new Dosen({
        nip: 10189013,
        nama: 'DYAH ERNY HERWINDIATI,Dr.,Ir,M.si',
        prodi: 'TEKNIK INFORMATIKA',
        
    }),
    new Dosen({
        nip: 10301014,
        nama: 'LINA,ST.,M.Kom.',
        prodi: 'TEKNIK INFORMATIKA',
        
    }),
    new Dosen({
        nip: 10390001,
        nama: 'JEANNY PRAGANTHA,Ir.,M.Eng',
        prodi: 'TEKNIK INFORMATIKA',
        
    }),
    new Dosen({
        nip: 10805001,
        nama: 'DESI ARISANDI,S.Kom.',
        prodi: 'TEKNIK INFORMATIKA',
        
    }),
    
]

var done = 0;
for (var i = 0; i < dosens.length; i++) {
    dosens[i].save((err, res) => {
        done++;
        if(done == dosens.length) {
            console.log('Berhasil tersimpan!');
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}
