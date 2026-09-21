const {Router} = require('express')
const noteController = require('./note.controller')
const {getPaginatedNotes} = require("./note.service");
const noteRouter = new Router()

noteRouter.get('/:id/posts',noteController.getNoteByIdOwner)
noteRouter.get('/paginate-sort', noteController.getPaginatedNotes)
noteRouter.patch('/all',noteController.updateAll)
noteRouter.post('/:userId',noteController.createNote)
noteRouter.patch('/:id',noteController.updateNote)
noteRouter.get('/:id',noteController.getNoteById)
noteRouter.put('/:id',noteController.replaceNote)
noteRouter.delete('/:id',noteController.deleteNote)



module.exports = noteRouter