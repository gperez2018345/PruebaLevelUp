const mongoose = require('mongoose');

const signUp = new mongoose.Schema({
    carnet:{
        type: String,
        required:true
    },
    name:{
        type: String, 
        required: true
    },
    address:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    dateBirth:{
        type: String,
        required: true
    },
    profession:{
        type: String,
        required: true
    },
    poetry:{
        type: String,
        required: true
    },
    inscription:{
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model('myform', signUp)