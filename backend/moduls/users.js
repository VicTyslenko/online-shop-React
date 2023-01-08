const {v4: uuidv4} = require('uuid');
const fs = require('node:fs')
const path = require('node:path');

class User {
    constructor({fullName, email, username, password}) {
        this.fullName = fullName,
        this.email = email,
        this.username = username,
        this.password = password,
        this.id = uuidv4(),
        this.tokenUser = uuidv4()
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'bd', 'users.json'), 'utf-8', (error, data)=>{
                    if (error) {
                        reject(error)
                    } else {
                        resolve(JSON.parse(data));
                    }
                }
            )
        })    
    }

    toJSON () {
        return {
            id: this.id,
            fullName: this.fullName,
            email: this.email,
            username: this.username,
            password: this.password,
            tokenUser: this.tokenUser
        }
    }

    async addUser () {
        const users = await User.getAll()
        users.push(this.toJSON())

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'bd', 'users.json'),JSON.stringify(users), (error)=>{
                    if (error) {
                        reject(error)
                    } else {
                        resolve();
                    }
                }
            )
        }) 
    }

    static async getUser(email,pass) {
        const users = await User.getAll()
        return users.find(user => user.email == email && user.pass == pass)
    }

} 

module.exports = User;