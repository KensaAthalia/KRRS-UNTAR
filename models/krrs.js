const mongoose = require('mongoose')

const krrsSchema = mongoose.Schema({
    nim:{
        type: Number,
        required: true
    },
    matkul: {
        type:Array
    },
    kelas:{
        type:Array
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('krrs', krrsSchema)