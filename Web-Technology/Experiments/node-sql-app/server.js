const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",   
    database: "studentdb"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});


// 1. CREATE (Insert)

app.post("/students", (req, res) => {
    const { name, age, course } = req.body;

    const sql = "INSERT INTO students (name, age, course) VALUES (?, ?, ?)";

    db.query(sql, [name, age, course], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({ message: "Student added successfully", id: result.insertId });
        }
    });
});


// 2. READ (Get All)
app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});


// 3. READ (Get One)
app.get("/students/:id", (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM students WHERE id=?", [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});


// 4. UPDATE
app.put("/students/:id", (req, res) => {
    const { name, age, course } = req.body;
    const { id } = req.params;

    const sql = "UPDATE students SET name=?, age=?, course=? WHERE id=?";

    db.query(sql, [name, age, course, id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send("Student updated successfully");
        }
    });
});


// 5. DELETE
app.delete("/students/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM students WHERE id=?", [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send("Student deleted successfully");
        }
    });
});


// SERVER
app.listen(3000, () => {
    console.log("server running on port 3000");
});