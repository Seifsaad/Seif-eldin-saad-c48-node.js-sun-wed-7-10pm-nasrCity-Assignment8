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

async function updateUser(id,updatedUser) {
    return await User.findByIdAndUpdate(id,updatedUser,{new:true,select: "-password"})
}

async function deleteUser(id) {
    return await User.deleteOne({_id:id})
}

async function getUserData(id){
    return await User.findById(id)
}

module.exports = {
    checkUserExists,
    signUp,
    signIn,
    updateUser,
    deleteUser,
    getUserData

}