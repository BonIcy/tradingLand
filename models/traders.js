let mongoose = require('mongoose');
let traderSchema = new  mongoose.Schema({
    nombre:{
    type:String,
    required:true,
    trim: true
    },
    edad:{
      type:String,
      required:true,
      trim: true  
    },
    capital:{
    type:String,
    required:true,
    trim: true
    },
    nacionalidad:{
      type:String,
      required:true,
      trim: true  
    }
    },
    {
        timestamps: true
    });

let Trader = mongoose.model('Traders', traderSchema)
module.exports = Trader