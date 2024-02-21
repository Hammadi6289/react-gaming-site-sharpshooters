import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/games", (req, res) => {
  // Corrected the route path
  res.send(data.games);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
