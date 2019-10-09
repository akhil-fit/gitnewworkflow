'use strict';

const express = require('express');
const compression = require('compression')
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(compression());


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.get('/', (req, res) => {
    res.send('Git new workflow test project!');
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));