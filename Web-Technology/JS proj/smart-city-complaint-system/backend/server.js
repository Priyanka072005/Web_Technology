const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Routes
const complaintRoutes = require("./routes/complaints");
app.use("/complaints", complaintRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});