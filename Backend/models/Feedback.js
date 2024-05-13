const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
    name:String,
    userId:String,
    email:String,
    feedback:String,
    item: String
})

const UserModel = mongoose.model("feedbacks",UserSchema)
module.exports=UserModel