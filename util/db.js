const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ProgrammingTest',
    password: 'fkdslJFS3fmaFSA9fa8'
  });

  connection.connect((err)=>{
      
    if (err){
        console.log(err);
    };

    console.log('database.js : Database: "ProgrammingTest" has been conected! ')



  });

  module.exports = connection;