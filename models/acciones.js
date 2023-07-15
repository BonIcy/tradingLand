let mongoose = require('mongoose');
let accionesSchema = new mongoose.Schema(
    {
    nombre:{
        type:String,
        required: true,
        trim:true
    },
    precio:{
        type:String,
        required: true,
        trim:true
    },
    tipo:{
        type:String,
        required: true,
        trim:true
    }
    },
    {
        timstamps : true
    })
let Acciones = mongoose.model('Acciones', accionesSchema);

module.exports = Acciones