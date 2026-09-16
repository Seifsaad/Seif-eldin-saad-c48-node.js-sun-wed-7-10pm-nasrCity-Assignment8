const userService = require('./user.service')

const signUp = async (req, res, next) => {
    try {
        const user = await userService.signUp(req.body)
        res.status(200).json({message: 'User signed up successfully',success: true,data: user})
    }catch (error) {
        next(error)
    }
}

const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await userService.signIn(email,password)
        res.status(200).json({message: 'User logged in successfully',success: true,data: user})
    }catch (error) {
        next(error)
    }
}


module.exports = {
    signUp,
    signIn,

}