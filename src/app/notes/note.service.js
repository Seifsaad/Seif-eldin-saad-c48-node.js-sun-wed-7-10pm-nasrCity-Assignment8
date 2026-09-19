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

async function updateNote(id,userId,noteData) {
    return await noteRepository.updateNote(id, {...noteData,userId});
}


module.exports = {
    createNote,
    updateNote,
}