//conexion BD
const mongoose = require ('mongoose')
const url_bd = "mongodb://localhost:27017/utma"
mongoose.connect(url_bd)
.then(() => {
    console.log('si jalo esta madre')
}
).catch((error)=>{
    console.log('no jalo esta madre')
})
//se realizara un esquema de la base de datos
const esquema_alumno = new mongoose.Schema
(
    {
 name:{
    type: String
 },
 appat:{
    type: String
 },
 num:{
    type: Number
 }
    }
)

//crear tabla
const modelo_alumno = new mongoose.model
("tabla de datos",esquema_alumno)

modelo_alumno.create({
    name : "camila",
    appat: "mendez",
    num: 449444445
})