const express = require('express');
const mysql = require('mysql');

const app = express();

/*
** Connection to database
*/
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prog-ind-data'
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  });
/*
** End of connection
*/

app.listen('6000', () => {
    console.log('Server started');
});

