const mongoose= require("mongoose");

const userSchema= new mongoose.Schema
(
   {
       login: String,
       password:
       {
            type:String,
            validate:
            [
                function (password)
                {
                    return password.length>5 
                }
            ]
       }
   } 
)
userSchema.pre("save",function(next){
    console.log("Middleware de entrada");
    if (this.password.length>5)
    {
        console.log("La seguridad de tu contraseña es fuerte")
        next();
    }
    else 
    console.log("La seguridad de la contraseña es muy debil")
})
module.exports= mongoose.model("User",userSchema,"user")
