const mongoose = require('mongoose');


let conectarDB = async () =>{
    try {
        let connectionDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        let url = `SERVER: ${connectionDB.connection.host} - PUERTO: ${connectionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
}

module.exports= conectarDB