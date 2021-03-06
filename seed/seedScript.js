const mongoose = require('mongoose');
const user = require('../models/user');
const User = require('../models/user')

mongoose.connect(('mongodb+srv://admin:UNTAR2020@cluster0.nu6km.mongodb.net/KRRS?retryWrites=true&w=majority')
,(err,res) => {
    if(err){
        console.error(err);
    }
    else{
        console.log('Database Terhubung untuk seeding');
    }
})

const users = [
    new User({
        username: 'venny',
        name: 'VENNY CYNTIA',
        email: 'venny@krs.com',
        password: '123456',
        role:'mahasiswa'
    }),
    new User({
        username: 'thia',
        name: 'DAMEETHIA ANGELINE',
        email: 'thia@krs.com',
        password: '123456',
        role:'mahasiswa'
    }),
    new User({
        username: 'kensa',
        name: 'KENSA ATHALIA',
        email: 'kensa@krs.com',
        password: '123456',
        role:'mahasiswa'
    }),
    
]

var done = 0;
for (var i = 0; i < users.length; i++) {
    users[i].save((err, res) => {
        done++;
        if(done == users.length) {
            console.log('Berhasil tersimpan!');
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}
