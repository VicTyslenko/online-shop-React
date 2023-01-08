const express = require('express');
// const { request } = require('http');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const manProductRouter = require('./routers/manProduct')
const womanProductRouter = require('./routers/womanProduct')
const accessoryRouter = require('./routers/accessory')
const shopingbagRouter = require('./routers/shopingbag')
const account = require('./routers/account')
const usersApiRouter = require('./routers/autorizationUser')
const authApiRouter = require('./routers/newUser')

app.use(cors())
app.use(express.static('./front'))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

const urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(session({
	secret: 'some secret value',
	resave: false,
	saveUninitialized: false,
}))

const PORT = process.env.PORT || 3000

app.use(manProductRouter)
app.use(womanProductRouter)
app.use(accessoryRouter)
app.use(shopingbagRouter)
app.use(account)
app.use('/api', urlencodedParser, usersApiRouter)
app.use('/auth', urlencodedParser, authApiRouter)

app.all('*', (request, response) => {
	response.status(404).send('resource not found')
})

const start = async () => {
	try {
		// mongodb+srv://admin:admin@cluster0.vbo48m0.mongodb.net/?retryWrites=true&w=majority
		const url = `mongodb+srv://igorDan:RgdBB5gjNNE1dYS2@cluster0.mteijke.mongodb.net/nodejsAPP`

		mongoose.connect(url, {
			useNewUrlParser: true,
		})

		app.listen(PORT, () => {
			console.log(`Server is running on :${PORT}`);
		})

	} catch (error) {
		console.log(error);
	}
}

start()