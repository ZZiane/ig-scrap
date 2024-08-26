const express = require('express');
const scrapRoute = require('./routes');

class Server {
    constructor() {
        this.port = process.env.PORT ?? 3000;
        this.app = express();
        this.config();
        this.routing();
    }

    config() {
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    routing() {
        this.app.use('/scrap', scrapRoute);

    }

    start() {
        this.app.listen(this.port, () => {
            console.log('serveur démarré...');
        })
    }

}
const server = new Server();
module.exports = server;