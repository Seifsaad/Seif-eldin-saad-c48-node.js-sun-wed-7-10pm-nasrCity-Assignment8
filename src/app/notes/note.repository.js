const Note = require('./note.model');

async function createNote(newNote) {
    return await Note.create(newNote)
}

async function updateNote(id, newNote) {
    return await Note.findByIdAndUpdate(id, newNote,{new:true})
}

module.exports = {
    createNote,
    updateNote,
}