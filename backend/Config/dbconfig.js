import mysql from "mysql2/promise";


//console.log(process.env.MYSQL_DATSABASE, process.env.MYSQL_PASSWORD)
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,     
  user: process.env.MYSQL_USER,         
  password: process.env.MYSQL_PASSWORD, 
  database: process.env.MYSQL_DATSABASE,   
});
console.log("Db connected")

export default pool;
