const noteRepository = require('./note.repository');
const userRepository = require('../users/user.repository');

async function createNote(userId,noteData) {
    if (!userId){
        throw new Error('UserId is required');
    }
    const note = await noteRepository.createNote({
        ...noteData,
        userId,
    });
    return note;
}
async function getNoteById(id) {
    return await noteRepository.getNoteById(id);
}

async function updateNote(id,userId,noteData) {
    const note = await noteRepository.getNoteById(id);
    if(!note){
        throw new Error('note not found.');
    }
    if (String(note.userId) !== userId) {
        throw new Error('you are not authorized!');
    }
    return await noteRepository.updateNote(id, {...noteData,userId});
}

async function replaceNote(id,userId,noteData) {
    const note = await noteRepository.getNoteById(id);
    if(!note){
        throw new Error('note not found.');
    }
    if (String(note.userId) !== userId) {
        throw new Error('you are not authorized!');
    }
    return await noteRepository.replaceNote(id, {...noteData, userId});
}

async function updateAll(userId,title){
    return await noteRepository.updateAll(userId,title);
}

async function deleteNote(id,userId) {
    const note = await noteRepository.getNoteById(id);
    if(!note){
        throw new Error('note not found.');
    }
    if (String(note.userId) !== userId) {
        throw new Error('you are not authorized!');
    }
    return await noteRepository.deleteNote(id,userId);
}

async function getPaginatedNotes(userId,page,limit) {
    const skip = (page - 1) * limit;
    return await noteRepository.getPaginatedNotes(userId,skip,limit);
}
async function getNoteByIdOwner(id,userId) {
    const note = await noteRepository.getNoteById(id);
    if (!note) {
        throw new Error('note not found.');
    }
    if (String(note.userId) !== userId) {
        throw new Error('you are not authorized!');
    }

    return note;
}

async function getNoteByContent(userId,content){
    return  await noteRepository.getNoteByContent(userId,content);
}

async function getAllNoteSelected(userId) {
    return await noteRepository.getAllNoteSelected(userId)
}

async function getAllNotesAggregated(userId,title) {
    return await noteRepository.getAllNotesAggregated(userId,title);
}

async function deleteAllNotes(userId){
    return await noteRepository.deleteAllNotes(userId);
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