const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nomorPokokMahasiswa:{
        type: String,
        required: true
    },
    nameMhs: {
        type: String,
        required: true
    },
    noRek: {
        type:String,
        required:true
    },
    ttl: {
        type:String,
        required:true
    },
    jk: {
        type:String,
        required:true
    },
    agama: {
        type:String,
        required:true
    },
    alamat: {
        type:String,
        required:true
    },
    noTelp: {
        type:Number,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    asalSekolah: {
        type:String,
        required:true
    },
    noIjazah: {
        type:String,
        required:true
    },
    tglIjazah: {
        type:String,
        required:true
    },
    namaOrtu: {
        type:String,
        required:true
    },
    alamatOrtu: {
        type:String,
        required:true
    },
    telpOrtu: {
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('bioUser', userSchema)