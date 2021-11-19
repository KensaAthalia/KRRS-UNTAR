const mongoose = require('mongoose');
const krrs = require('../models/krrs');
const Krrs = require('../models/krrs')

mongoose.connect(('mongodb+srv://admin:UNTAR2020@cluster0.nu6km.mongodb.net/KRRS?retryWrites=true&w=majority')
,(err,res) => {
    if(err){
        console.error(err);
    }
    else{
        console.log('Database Terhubung untuk seeding');
    }
})

const krrss = [
    new krrs({
        nim: 535200019,
        matkul:['TK23015'],
    }),
    
]

var done = 0;
for (var i = 0; i < krrss.length; i++) {
    krrss[i].save((err, res) => {
        done++;
        if(done == krrss.length) {
            console.log('Berhasil tersimpan!');
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}