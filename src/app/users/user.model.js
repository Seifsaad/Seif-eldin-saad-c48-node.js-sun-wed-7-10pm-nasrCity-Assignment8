const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
    name: {type:String,required: true},
    email: {type:String,required: true,unique:true},
    password: {type:String,required: true},
    phone: {type:String,required: true},
    age:{type:Number,min:18,max:60},
})

const User = model('User', UserSchema);

module.exports = User;