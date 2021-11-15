const mongoose= require("mongoose");
const { boolean } = require("webidl-conversions");

const userSchema= new mongoose.Schema
(
    {
        login: String,
        password: String,
        nombre:String,
        apellidos: String,
        email: String,
        rol: String,
        verified:boolean,
        follow: String,
    }
)
module.exports= mongoose.model("User",userSchema,"user")