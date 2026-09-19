const noteService = require('./note.service');

const createNote = async (req, res,next) => {
    try {
        const {userId} = req.query
        const note = await noteService.createNote(userId,req.body)
        res.status(200).json({message:"note created successfully",success:true,data:note})
    }catch(error){
        next(error)
    }
}

const updateNote = async (req, res,next) => {
    try {
        const {id} = req.params
        const {userId} = req.query
        const note = await noteService.updateNote(id,userId,req.body)
        res.status(200).json({message:"note updated successfully",success:true,data:note})
    }catch(error){
        next(error)
    }
}

module.exports = {
    createNote,
    updateNote,
}
