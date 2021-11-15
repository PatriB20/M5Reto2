let mongoose =require("mongoose");
let user = require("./userSchema");
let photo = require("./schemaPhoto");


mongoose.connect("mongodb://localhost:27017/CODENOTCH",
                {useNewUrlParser:false, useUnifiedTopology:false}) 
function checkRespuesta(error,res)
{
    if(error)
        console.log(error)
    else {
        console.log(res)
    }
}
//subida foto
// let data ={
//     login:"@Manuela",
//     url:"./foto",
//     titulo:"domingo",
//     descripcion:"foto de domingo"
// };
// let document= new photo(data);
// photo.create(document,checkRespuesta);




//obtener fotos
// photo.findOne({login:"@Pepe"})
// .then (function(items)
// {
//     console.log(items)
// })
// .catch(function()
// {
//     console.log("Error")
// })



//Seguir
user.updateOne({login:"@Pepe"},{follow:"@Pablo"},checkRespuesta)
//Dejar de seguir
// user.updateOne({login:"@Pepe",follow:"@Pablo"}, {follow:""})
//borrar foto
// photo.deleteOne(
//     {login:"Pepe",titulo:"navidad"},
//     function(error)
//     {
//         if(error)
//             console.log(error)
//         else
//         {
//             console.log("se ha eliminado correctamente")
//         }
//     }
// )
//borrar todas las fotos
// photo.deleteMany(
//     {login:"Pepe"},
//     function(error,datos)
//     {
//         if(error)
//             console.log(error)
//         else
//         {
//             console.log("se ha eliminado correctamente")
//             console.log(datos)
//         }
//     }
// )
