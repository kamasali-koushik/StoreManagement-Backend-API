const mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});

conn.connect((err, args) => {
  if (!err) {
    console.log("Connected to database!");
  }
});

const db = (query) => {
  return new Promise((resolve, reject) => {
    conn.query(query, (err, res, fields) => {
      if (err) reject(err);
      else resolve({ res, fields });
    });
  });
};

module.exports = db;
