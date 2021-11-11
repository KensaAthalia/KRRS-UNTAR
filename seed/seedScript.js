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
        username: 'Aldi',
        name: 'Aldi Mahendra',
        email: 'aldi@krs.com',
        password: '123456',
    }),
    new User({
        username: 'Jena',
        name: 'Jena Malik',
        email: 'jena@krs.com',
        password: '123456',
    }),
    
]

var done = 0;
for (var i = 0; i < users.length; i++) {
    users[i].save((err, res) => {
        done++;
        if(done == user.length) {
            console.log('Berhasil tersimpan!');
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}
