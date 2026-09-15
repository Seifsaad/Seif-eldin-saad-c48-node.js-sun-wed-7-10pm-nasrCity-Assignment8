const {model, Schema} = require('mongoose');

const NoteSchema = new Schema({
    title: {String,required: true,lowercase: true},
    content: {String,required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
},{
    timestamps: true
})

const Note = model('Note', NoteSchema);

module.exports = Note;