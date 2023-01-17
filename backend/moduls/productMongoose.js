const {Schema, model} = require('mongoose')

const product = new Schema({
    src: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    label: {
        status: String,
        text: String
    },
    prices: {
        retail: {
            type: Number,
            require: true
        },
        sale: Number,
        procent: Number,
        currency: String,
    }
})

module.exports = model('Product',product)