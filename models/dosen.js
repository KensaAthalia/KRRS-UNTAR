const mongoose = require('mongoose')

const dosenSchema = mongoose.Schema({
    nip:{
        type: Number,
        unique: true,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    prodi: {
        type: String,
        required:true
    },
    matkul: {
        type:Array
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Dosen', dosenSchema, 'dosen')