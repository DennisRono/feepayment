const mysql = require('mysql')
require('dotenv').config()

const conn = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

conn.query(
    "SELECT * FROM users",
    (err, result) => {
      err ? console.log(err) : console.log("conn succ");
    }
  )

module.exports = conn