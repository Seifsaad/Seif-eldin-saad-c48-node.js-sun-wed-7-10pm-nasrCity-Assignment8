
const Note = require('./note.model');

async function createNote(newNote) {
    return await Note.create(newNote)
}

async function updateNote(id, newNote) {
    return await Note.findByIdAndUpdate(id, newNote,{new:true})
}

async function getNoteById(id) {
    return await Note.findById(id)
}

async function replaceNote(id, newNote) {
    return await Note.findOneAndReplace({_id:id},newNote,{new:true})
}

async function updateAll(userId,title){
    return await Note.updateMany({userId:userId},{title:title})
}

async function deleteNote(id) {
    return await Note.findByIdAndDelete(id)
}

async function getPaginatedNotes(userId,skip,limit) {
    return await Note.find({userId:userId}).skip(skip).limit(limit).sort({ createdAt: -1})
}



module.exports = {
    createNote,
    updateNote,
    getNoteById,
    replaceNote,
    updateAll,
    deleteNote,
    getPaginatedNotes,

}