const Note = require('./note.model');

async function createNote(newNote) {
    return await Note.create(newNote)
}

async function updateNote(id, newNote) {
    return await Note.findByIdAndUpdate(id, newNote, {new: true})
}

async function getNoteById(id) {
    return await Note.findById(id)
}

async function replaceNote(id, newNote) {
    return await Note.findOneAndReplace({_id: id}, newNote, {new: true})
}

async function updateAll(userId, title) {
    return await Note.updateMany({userId: userId}, {title: title})
}

async function deleteNote(id) {
    return await Note.findByIdAndDelete(id)
}

async function getPaginatedNotes(userId, skip, limit) {
    return await Note.find({userId: userId}).skip(skip).limit(limit).sort({createdAt: -1})
}

async function getNoteByContent(userId, content) {
    return await Note.find({userId: userId, content: {$regex: content, $options: 'i'}})
}

async function getAllNoteSelected(userId) {
    return await Note.find({userId: userId})
        .select('title userId createdAt')
        .populate('userId', {'email': true, '_id': 0},)
}

async function getAllNotesAggregated(userId, title) {
        title = {$regex: title, $options: 'i'}
    return await Note.aggregate([
        {$match: {title: title},},
        {$project: {userId: 1, createdAt: 1}},


    ])
}

async function deleteAllNotes(userId) {
    return await Note.deleteMany({userId: userId})
}

module.exports = {
    createNote,
    updateNote,
    getNoteById,
    replaceNote,
    updateAll,
    deleteNote,
    getPaginatedNotes,
    getNoteByContent,
    getAllNoteSelected,
    getAllNotesAggregated,
    deleteAllNotes
}