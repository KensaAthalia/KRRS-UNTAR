const mongoose = require('mongoose')
const matkulSchema = mongoose.Schema({
    kode:{
        type: String,
        unique: true,
        required: true
    },
    prodi: {
        type: String,
        required: true
    },
    matakuliah: {
        type: String,
        required:true
    },
    sks: {
        type:Number,
        required:true
    },
    semester: {
        type:String,
        required:true
    },
    nosms:{
        type:Number
    },
    kelas:{
        type:Array
    },
    ruang:{
        type:Array
    },
    jadwal:{
        type:Array
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Matkul', matkulSchema, 'matkul')