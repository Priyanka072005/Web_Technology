const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "smartcity_complaints"
});

db.connect(err => {
  if (err) console.log(err);
  else console.log("MySQL Connected ✅");
});

module.exports = db;