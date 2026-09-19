const {Router} = require('express')
const noteController = require('./note.controller')
const noteRouter = new Router()


noteRouter.post('/:userId',noteController.createNote)
noteRouter.patch('/:id',noteController.updateNote)


module.exports = noteRouter