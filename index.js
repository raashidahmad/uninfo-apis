const express = require('express');
const mysqllib = require('./config/connection');

const app = express();

/*
** Connection to database
*/
mysqllib.connect().then(() => {
    console.log('Connected to mysql...')
  }).catch(e => {
    console.error('Error connecting mysql...')
    process.exit()
  })
/*
** End of connection
*/

app.listen('6000', () => {
    console.log('Server started');
});

