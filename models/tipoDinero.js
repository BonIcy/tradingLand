let mongoose = require('mongoose');

let tipoDineroSchema = new mongoose.Schema(
    {
    nombre:{
        type:String,
        required: true,
        trim:true
    }
    
    },
    {
        timstamps : true
    })
let TipoDinero = mongoose.model('TiposDineros', tipoDineroSchema);

module.exports = TipoDinero