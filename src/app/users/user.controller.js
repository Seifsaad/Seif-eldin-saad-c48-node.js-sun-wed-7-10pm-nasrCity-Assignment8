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

const updateUser = async (req, res, next) => {
    try {
        let {id} = req.params;
        const user = await userService.updateUser(id,req.body)
        res.status(200).json({message: 'User updated successfully',success: true,data: user})
    }catch (error) {
        next(error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        let {id} = req.params;
        const user = await userService.deleteUser(id)
        res.status(200).json({message: 'User deleted successfully',success: true,data: user})
    }catch (error) {
        next(error)
    }
}

const getUserData = async (req, res, next) => {
    try {
        let {id} = req.params;
        const user = await userService.getUserData(id)
        res.status(200).json({message: 'User gets successfully',success: true,data: user})
    }catch (error) {
        next(error)
    }
}

module.exports = {
    signUp,
    signIn,
    updateUser,
    deleteUser,
    getUserData
}