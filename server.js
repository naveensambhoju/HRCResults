const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_KEY = process.env.ADMIN_KEY || "MY_SECRET_KEY";
const FILE = path.join(__dirname, "data.txt");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* public API */
app.get("/content", (req, res) => {
  fs.readFile(FILE, "utf8", (err, data) => {
    res.json({ text: err ? "" : data });
  });
});

/* admin API */
app.post("/admin/save", (req, res) => {
  const key = req.headers["x-admin-key"] || req.body.admin_key || "";
  if (key !== ADMIN_KEY) return res.sendStatus(403);

  fs.writeFile(FILE, req.body.text || "", (err) => {
    if (err) return res.sendStatus(500);
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
