const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const path = require('node:path')

const cart = require('./routers/cart')
const catalog = require('./routers/catalog')
const colors = require('./routers/colors')
const comments = require('./routers/comments')
const customers = require('./routers/customers')
const filters = require('./routers/filters')
const globalConfigs = require('./routers/globalConfigs')
const links = require('./routers/links')
const orders = require('./routers/orders')
const pages = require('./routers/pages')
const partners = require('./routers/partners')
const paymentMethods = require('./routers/paymentMethods')
const products = require('./routers/products')
const shippingMethods = require('./routers/shippingMethods')
const sizes = require('./routers/sizes')
const slides = require('./routers/slides')
const subscribers = require('./routers/subscribers')
const wishlist = require('./routers/wishlist');

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
const bd = require('./config/keys').mongoURI

mongoose
	.connect(bd, {
	useNewUrlParser: true,
	useFindAndModify : false,
})
	.then (()=> console.log('MongoDB connected...'))
	.catch ((error) => console.log(error))

app.use(passport.initialize())

app.use(cart)
app.use(catalog)
app.use(colors)
app.use(comments)
app.use(customers)
app.use(filters)
app.use(globalConfigs)
app.use(links)
app.use(orders)
app.use(pages)
app.use(partners)
app.use(paymentMethods)
app.use(products)
app.use(shippingMethods)
app.use(sizes)
app.use(slides)
app.use(subscribers)
app.use(wishlist)

if (process.env.NODE_ENV== 'production') {
	app.use(express.static('./сlient/public'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
	})
}