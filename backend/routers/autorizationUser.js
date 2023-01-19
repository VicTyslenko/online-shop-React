const {Router} = require('express')
const router = Router()
const autorizationUser = require('../helpers/autorizationUser')
const User = require('../moduls/usersMongoose')

router.post('/login', async (request, response) => {
	const users = await User.find();
	const user = autorizationUser(request.body)

	console.log('/login => user',user);

	if (user) {
		request.session.user = autorizationUser(users, request.body)
		request.session.isAuthenticated = true;
		request.session.save(err => {
			if (err) {
				throw err
			}
			response.status(200).json({ ...user });
		})
	} else {
		response.status(200).json({ });
	}
});

router.get('/logout', async (req, res) => {
	req.session.destroy(() => {
		res.redirect('/')
	})
})

module.exports = router