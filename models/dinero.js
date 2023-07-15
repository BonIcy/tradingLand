let mongoose = require('mongoose');
let dineroSchema = new mongoose.Schema(
    {
    nombre:{
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
let Dinero = mongoose.model('Dineros', dineroSchema);

module.exports = Dinero