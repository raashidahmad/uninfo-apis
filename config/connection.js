const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prog-ind-data'
};

var pool = mysql.createPool(config);

module.exports.connect = function (cb) {
  return new Promise((resolve, reject) => {
    pool.on('connection', function (connection) {
      connection.on('error', function (err) {
        console.log('MySQL error event: ' + err);
      });
      connection.on('close', function (err) {
        console.log('MySQL close event: ' + err);
      });
    });
    resolve();
  })
}

async function executeQuery (query) {
    console.log('query: ' + query);
    return new Promise((resolve, reject) => {
      try{
        pool.query(query, (e, r, f) => {
          if(e){
            reject(e)
          }
          else{
            resolve(r[0])
          }
        });
      }
      catch(ex){
        reject(ex)
      }
    })  
  }
  module.exports.executeQuery = executeQuery;