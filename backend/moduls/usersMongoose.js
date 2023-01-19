const {Schema, model} = require('mongoose');

const user = new Schema({
    firstName: {
        type: String,
        require: true
    },
    secondName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        minlength: 6,
        require: true
    },
    tokenUser: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
})

module.exports = model('User',user)