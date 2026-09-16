const User = require('./user.model');

async function checkUserExists(email) {
    return await User.findOne({email: email}, {}, {})
}

async function signUp(newUser) {
    return await User.create(newUser)
}

async function signIn(email, password) {
    return await User.findOne({
        email: email,
        password: password
    }, {}, {})
}

module.exports = {
    checkUserExists,
    signUp,
    signIn,

}