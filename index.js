import express from "express";
import fetch from "node-fetch";

const app = express();

// Root route (check karne ke liye)
app.get("/", (req, res) => {
  res.send("✅ Instagram API is working! Use endpoint: /instagram?url=YOUR_INSTAGRAM_LINK");
});

// Instagram API route
app.get("/instagram", async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: "❌ Missing 'url' parameter" });
  }

  try {
    // External API se data fetch karna
    const response = await fetch(
      `https://api.davidcyriltech.my.id/instagram?url=${encodeURIComponent(url)}`
    );

    if (!response.ok) {
      return res.status(500).json({ error: "❌ Failed to fetch data from external API" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "⚠️ Internal Server Error", details: error.message });
  }
});

// Server listen (Vercel me PORT auto set hota hai)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
