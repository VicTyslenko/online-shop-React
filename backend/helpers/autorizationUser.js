const users = require('../bd/users.json');

const autorizationUser = ({email,password}) => {
    return users.find(item => item.email == email && item.password == password)
}

module.exports = autorizationUser