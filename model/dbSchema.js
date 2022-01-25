const mongoose = require('mongoose')

const eSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UserData', eSchema)