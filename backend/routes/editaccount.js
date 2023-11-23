const express = require("express");
const router = express.Router();
const client = require("../index");

router.put("/editaccount", async (req, res) => {
  try {
    const { username, firstname, lastname, phonenumber, email, password } =
      req.body;

    const result = await router.client.query(
      "UPDATE person_datas SET person_username = $1, person_firstname = $2, person_lastname = $3, person_phone_number = $4, person_email = $5, person_password = $6 WHERE person_username = $7;",
      [username, firstname, lastname, phonenumber, email, password, username]
    );

    console.log(firstname);
    if (result.rowCount > 0) {
      res
        .status(200)
        .json({ success: true, message: "Användaren har uppdaterats." });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Användaren har inte uppdaterats." });
    }

    // client.release();
  } catch (error) {
    console.error("Error updateing user", error);
    res.status(500).json({ success: false, message: "Något gick fel." });
  }
});

router.get("/editaccount", async (req, res) => {
  const { username } = req.query;
  try {
    const { rows } = await router.client.query(
      "SELECT * FROM person_datas WHERE person_username = $1",
      [username]
    );
    console.log("Get user info", rows);
    res.send(rows);
  } catch (error) {
    console.error("Error fetching user", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
