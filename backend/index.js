const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const { Client } = require("pg");
const cors = require("cors");

dotenv.config();
const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const signinpage = require("./routes/signinpage");
app.use(signinpage);

const createaccount = require("./routes/createaccount");
createaccount.client = client;
app.use(createaccount);

app.get("/api", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM blogs");
  response.send(rows);
});

app.get("/users", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM person_datas");
  console.log("Hämta användare");
  response.send(rows);
});

app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(port, () => {
  console.log(`Välkommen till port ${port}`);
});
