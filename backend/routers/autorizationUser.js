const {Router} = require('express')
const router = Router()
const autorizationUser = require('../helpers/autorizationUser')

router.post('/login', async (request, response) => {
	const user = autorizationUser(request.body)
	if (user) {
		request.session.user = autorizationUser(request.body)
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