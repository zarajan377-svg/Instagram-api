const express = require("express");
const app = express();

// Hosting platform ka port use hoga, warna 3000 local ke liye
const PORT = process.env.PORT || 3000;

// Example route (root)
app.get("/", (req, res) => {
  res.send("✅ Server is working on Katabump Hosting!");
});

// Example test route
app.get("/test", (req, res) => {
  res.json({ status: "success", message: "Test route working fine!" });
});

// Server ko 0.0.0.0 par listen karwa rahe hain (publicly accessible)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
