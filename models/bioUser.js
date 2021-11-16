const mongoose = require('mongoose')

const bioSchema = mongoose.Schema({
    nomorPokokMahasiswa:{
        type: String,
        required: true
    },
    nameMhs: {
        type: String,
    },
    noRek: {
        type:String,
        
    },
    ttl: {
        type:String,
        
    },
    jk: {
        type:String,
        
    },
    agama: {
        type:String,
        
    },
    alamat: {
        type:String,
        
    },
    noTelp: {
        type:Number,
        
    },
    email: {
        type: String,
        
    },
    asalSekolah: {
        type:String,
        
    },
    noIjazah: {
        type:String,
        
    },
    tglIjazah: {
        type:String,
        
    },
    namaOrtu: {
        type:String,
        
    },
    alamatOrtu: {
        type:String,
        
    },
    telpOrtu: {
        type:String,
        
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('bioUser', bioSchema)