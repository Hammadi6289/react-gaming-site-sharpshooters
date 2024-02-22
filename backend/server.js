import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/games", (req, res) => {
  res.send(data.games);
});

// Route to handle requests for specific game details based on slug
app.get("/api/games/:slug", (req, res) => {
  const { slug } = req.params;
  const game = data.games.find((game) => game.slug === slug);
  if (game) {
    res.send(game);
  } else {
    res.status(404).send({ message: "Game not found" });
  }
});

app.get("/api/game/:id", (req, res) => {
  const game = data.games.find((x) => x._id === req.params.id);

  if (game) {
    res.send(game);
  } else {
    res.status(404).send({ message: "Game not found" });
  }
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
