const mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});


const db = async (query) => {
 await conn.connect((err, args) => {
    if (!err) {
      console.log("Connected to database!");
    }
  });
  
  try{
     var dta=await conn.query(query)
     conn.release()
    
     return dta

  }
  catch(e){
    return e
  }
  
};


module.exports = db;
