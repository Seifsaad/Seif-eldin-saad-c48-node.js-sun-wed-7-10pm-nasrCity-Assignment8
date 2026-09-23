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

const getNoteById = async (req, res,next) => {
    try {
        const {id} = req.params
        const note = await noteService.getNoteById(id)
        res.status(200).json({message:"note gets successfully",success:true,data:note})
    }catch(error){
        next(error)
    }
}

const replaceNote = async (req, res,next) => {
    try {
        const {id} = req.params
        const {userId} = req.query
        const note = await noteService.replaceNote(id,userId,req.body)
        res.status(200).json({message:"note replaced successfully",success:true,data:note})
    }catch(error){
        next(error)
    }
}

const updateAll = async (req, res,next) => {
    try {
        const {userId} = req.query
        const {title} = req.body
        const note = await noteService.updateAll(userId,title)
        res.status(200).json({message:"note updated successfully",success:true,data:note})
    }catch (error){
        next(error)
    }
}

const deleteNote = async (req, res,next) => {
    try {
        const {id} = req.params
        const {userId} = req.query
        const note = await noteService.deleteNote(id,userId)
        res.status(200).json({message:"note deleted successfully",success:true,data:note})
    }catch(error){
        next(error)
    }
}

const getPaginatedNotes = async (req, res,next) => {
    try {
        const {userId,page,limit} = req.query
        const notes = await noteService.getPaginatedNotes(userId,page,limit)
        res.status(200).json({message:"note getPaginatedSuccessfully",success:true,data:notes})
    }catch (error){
        next(error)
    }
}

const getNoteByIdOwner = async (req, res,next) => {
    try {
        const {id} = req.params
        const {userId} = req.query
        const note = await noteService.getNoteByIdOwner(id,userId)
        res.status(200).json({message:"note getNoteByIdOwnerSuccessfully",success:true,data:note})
    }catch(error){
        next(error)
    }
}

const getNoteByContent = async (req, res,next) => {
    try {
        const {userId} = req.params
        const {content} = req.query
        const note = await noteService.getNoteByContent(userId,content)
        res.status(200).json({message:"note getNoteByContentSuccessfully",success:true,data:note})
    }catch(error){
        next(error)
    }
}

const getAllNoteSelected = async (req, res,next) => {
    try {
        const {userId} = req.query;
        const notes = await noteService.getAllNoteSelected(userId)
        res.status(200).json({message:getAllNoteSelected,success:true,data:notes})
    }catch (error){
        next(error)
    }
}

const getAllNotesAggregated = async (req, res,next) => {
    try {
        const {userId} = req.params
        let {title} = req.query
        const notes = await noteService.getAllNotesAggregated(userId,title)
        res.status(200).json({message:'getAllNotesAggregated',success:true,data:notes})
    }catch (error){
        next(error)
    }
}

    const deleteAllNotes = async (req, res,next) => {
    try {
        const {userId} = req.query
        const notes = await noteService.deleteAllNotes(userId)
        res.status(200).json({message:"all notes deleted",success:true,data:notes})
    }catch (error){
        next(error)
    }
}

module.exports = {
    createNote,
    updateNote,
    getNoteById,
    replaceNote,
    updateAll,
    deleteNote,
    getPaginatedNotes,
    getNoteByIdOwner,
    getNoteByContent,
    getAllNoteSelected,
    getAllNotesAggregated,
    deleteAllNotes
}
