const express = require("express");
const fetch = require("node-fetch");
const app = express();

const PORT = process.env.PORT || 3000;

// ✅ Home route (test karne ke liye)
app.get("/", (req, res) => {
  res.send("✅ Instagram API is running!");
});

// ✅ API route: /api?url=INSTAGRAM_LINK
app.get("/api", async (req, res) => {
  const igUrl = req.query.url;
  if (!igUrl) {
    return res.status(400).json({ error: "Missing ?url=" });
  }

  try {
    const response = await fetch(
      "https://api.davidcyriltech.my.id/instagram?url=" + encodeURIComponent(igUrl)
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch", details: err.message });
  }
});

// ✅ Server listener
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
