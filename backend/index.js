const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const path = require('node:path')

// const manProductRouter = require('./routers/manProduct')
// const womanProductRouter = require('./routers/womanProduct')
// const accessoryRouter = require('./routers/accessory')
// const shopingbagRouter = require('./routers/shopingbag')
// const account = require('./routers/account')
// const usersApiRouter = require('./routers/autorizationUser')
// const authApiRouter = require('./routers/newUser')

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
const bd = require('./config/keys/').mongoURI

mongoose
	.connect(bd, {
	useNewUrlParser: true,
	useFindAndModify : false,
})
	.then (()=> console.log('MongoDB connected...'))
	.catch ((error) => console.log(error))

app.use(passport.initialize())

// app.use(manProductRouter)
// app.use(womanProductRouter)
// app.use(accessoryRouter)
// app.use(shopingbagRouter)
// app.use(account)
// app.use('/api', urlencodedParser, usersApiRouter)
// app.use('/auth', urlencodedParser, authApiRouter)

if (process.env.NODE_ENV== 'production') {
	app.use(express.static('./frontend/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	})
}