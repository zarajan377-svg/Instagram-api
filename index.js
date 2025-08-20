import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Instagram API is live! Use endpoint: /api?postUrl=INSTAGRAM_LINK");
});

app.get("/api", async (req, res) => {
  const postUrl = req.query.postUrl;
  if (!postUrl) return res.status(400).json({ error: "Missing postUrl param" });

  try {
    const response = await fetch(
      `https://instavideodownloader-com.onrender.com/api/video?postUrl=${encodeURIComponent(postUrl)}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from API", details: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
