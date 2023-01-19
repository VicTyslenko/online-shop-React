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
    description: {
        type: String,
        require: true
    },
    prices: {
        retail: {
            type: Number,
            require: true
        },
        sale: Number,
        procent: Number,
        currency: String,
    },
    color: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    article: {
        type: String,
        require: true
    }, 
    become: {
        type: String,
        require: true
    }
})

module.exports = model('Product',product)