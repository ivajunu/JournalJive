const express = require("express");
const router = express.Router();
// const app = express();
const client = require("./index");

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await router.client.query(
      "SELECT * FROM person_datas WHERE person_username = $1 AND person_password = $2",
      [username, password]
    );
    if (result.rows.length > 0) {
      res.status(200).json({ message: "Successfully signed in" });
    } else {
      res.status(401).json({
        message:
          "Something isn't adding up... Please doublecheck the credentials you've put in and try again :)",
      });
    }
  } catch (error) {
    console.error("Error during sign-in", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/signin", async (_req, res) => {
  try {
    const { rows } = await router.client.query(
      "SELECT person_username, person_password FROM person_datas"
    );
    console.log("Hämtar inloggningsuppgifter");
    res.send(rows);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
