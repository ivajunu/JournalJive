const express = require("express");
path = require("path");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
  })
);

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.get("/api", async (request, response) => {
  const { rows } = await client.query("SELECT * FROM blogpost_person");
  response.send(rows);
});

//Nedan är kod för att kunna logga in -Bella
app.post("/api/signin", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    res.status(200).send("Succesfully signed in");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(port, () => {
  console.log(`Välkommen till port ${port}`);
});
