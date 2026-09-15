const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
    name: {String,required: true},
    email: {String,required: true,unique:true},
    password: {String,required: true},
    phone: {String,required: true},
    age:{Number,min:18,max:60},
})

const User = model('User', UserSchema);

module.exports = User;