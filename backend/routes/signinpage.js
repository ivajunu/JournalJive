const express = require("express");
const router = express.Router();
const app = express();
const client = require("../index");

app.get("/users", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM person_datas");
  response.send(rows);
});

router.get("/signin", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM person_datas");
    console.log("Hämtar alla användare");
    res.send(rows);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const person_username = req.body.person_username;
    const person_password = req.body.person_password;

    const result = await client.query(
      "SELECT * FROM person_datas WHERE person_username = $1 AND person_password = $2",
      [person_username, person_password]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ message: "Successfully signed in" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during sign-in", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
