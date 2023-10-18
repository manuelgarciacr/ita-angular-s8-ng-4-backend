const express = require('express');
const app = express();
const tcpPortUsed = require('tcp-port-used');

/// Settings   

const port = normalizePort(process.env.PORT || '3000');

app.set('port', port); 

// Middleware

app.use(express.urlencoded({extended: false}));

// Routes
 
app.use(require('./routes/users'));

module.exports = app;

/**
 * Normalize a port into a number, string, or false.
 */

async function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        return tcpPortUsed.check(port)
        .then(function (inUse) {
            if (inUse) {
                console.log('Port %s usage: %s', port, inUse);
                return 0
            }
            return port
        }, function (err) {
            console.error('Error on check:', err.message);
            return 0
        });
    }

    return false;
}


