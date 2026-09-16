const {model, Schema} = require('mongoose');

const NoteSchema = new Schema({
    title: {type:String,required: true,validate: [
            (value) => !/[a-zA-Z]/.test(value) || value !== value.toUpperCase(),
            'Title cannot be entirely uppercase.'
        ]},
    content: {type:String,required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
},{
    timestamps: true
})

const Note = model('Note', NoteSchema);

module.exports = Note;