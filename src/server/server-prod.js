import path from 'path';
import express from 'express';
import config from '../config.js';

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html');


app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
});

app.listen(config.PORT, () => {
    console.log(`App listening to ${config.PORT}....`)
    console.log('Press Ctrl+C to quit.')
});