const mongoose = require('mongoose')

const mahasiswaSchema = mongoose.Schema({
    nim:{
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
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Mahasiswa', mahasiswaSchema, 'mahasiswa')