const express = require("express");
const router = express.Router();
const db = require("../db");

// GET
router.get("/", (req, res) => {
  db.query("SELECT * FROM complaints", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Database error");
    } else {
      res.json(result);
    }
  });
});

// POST
router.post("/", (req, res) => {
  const { id, title, description, category, location, status, image } = req.body;

  const sql = "INSERT INTO complaints VALUES (?, ?, ?, ?, ?, ?, ?)";

  db.query(sql, [id, title, description, category, location, status, image], (err) => {
    if (err) throw err;
    res.json({ message: "Complaint added" });
  });
});

// PUT
router.put("/:id", (req, res) => {
  const sql = "UPDATE complaints SET status=? WHERE id=?";

  db.query(sql, [req.body.status, req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: "Updated" });
  });
});

// DELETE
router.delete("/:id", (req, res) => {
  const sql = "DELETE FROM complaints WHERE id=?";

  db.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: "Deleted" });
  });
});

module.exports = router;