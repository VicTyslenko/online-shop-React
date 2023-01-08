const {Router} = require('express')
const router = Router()

const User = require("../moduls/users");

router.post('/register', async (request, response) => {
    const user = new User(request.body)

    try {
        await user.addUser()
    } catch (error) {
        console.log(error);
    }
    // console.log('BE - register',request.body);
});

module.exports = router