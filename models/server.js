const express = require('express');
const cors = require('cors');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.tipoDineroPath = '/api/tipoDinero';
        this.traderPath = '/api/trader'
        // Middleware
        this.middlewares();
        // Rutas
        this.routes();
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json()); 
    }

    routes() {
        this.app.use('/api/tipoDinero', require('../routes/tipoDinero.routes.js'));
        this.app.use('/api/trader', require('../routes/trader.routes.js'));
    }



    listen() {
        this.app.listen(this.port, () => {
            console.log(`SERVER CORRIENDOSE EN EL PUERTO: ${this.port}`);
        });
    }
}

module.exports = Server
