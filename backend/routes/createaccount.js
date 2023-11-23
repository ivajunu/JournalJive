const express = require("express");
const router = express.Router();
// const app = express();
const client = require("../index");

client.connect();

app.use(cors());

router.get("/createaccount", async (_req, res) => {
  try {
    const { rows } = await router.client.query("SELECT * FROM person_datas");
    console.log("Hämtar alla användare");
    res.send(rows);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/createaccount", async (req, res) => {
  try {
    const { username, firstname, lastname, phonenumber, email, password } =
      req.body;

    console.log(req.body);

    const result = await router.client.query(
      "INSERT INTO person_datas (person_username, person_firstname, person_lastname, person_phone_number, person_email, person_password) VALUES ($1, $2, $3, $4, $5, $6);",
      [username, firstname, lastname, phonenumber, email, password]
    );

    res
      .status(201)
      .json({ message: "User created successfully", data: result.rows });
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
