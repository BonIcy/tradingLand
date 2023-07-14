require('dotenv').config();
let conectarDB = require('./config/config.js')
let Server = require('./models/server.js');

let server = new Server();
conectarDB();
server.listen(); 