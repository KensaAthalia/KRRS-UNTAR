const mongoose = require('mongoose')

const krrsSchema = mongoose.Schema({
    nim:{
        type: Number,
        unique: true,
        required: true
    },
    matkul: {
        type:Array
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('krrs', krrsSchema)