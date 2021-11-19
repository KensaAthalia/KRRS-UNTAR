const mongoose = require('mongoose')

const chtadminSchema = mongoose.Schema({
    nim:{
        type:Number
    },
    pertanyaan:{
        type: String,
        required: true
    },
    jawaban:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('chatadmin', chtadminSchema) 