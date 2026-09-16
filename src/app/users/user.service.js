const userRepository = require('./user.repository')

async function signUp(newUser) {
    const userExists = await userRepository.checkUserExists(newUser.email);
    if (userExists) {throw new Error('User already exists')}
    const user = await userRepository.signUp(newUser);
    return user;
}

async function signIn(email, password) {
    const user =  await userRepository.signIn(email, password);
    if (!user) {
        throw new Error('Invalid email or password');
    }
    return user;
}

module.exports = {
    signUp,
    signIn,

}