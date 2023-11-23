const express = require("express");
const router = express.Router();
const client = require("../index");

client.connect();

app.use(cors());

router.delete("/deleteaccount", async (req, res) => {
  try {
    const { userName } = req.body;

    const result = await router.client.query(
      "DELETE FROM person_datas WHERE person_username = $1",
      [userName]
    );
    console.log(result, userName);
    if (result.rowCount > 0) {
      res
        .status(200)
        .json({ success: true, message: "Användaren har raderats." });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Användaren hittades inte." });
    }

    // client.release();
  } catch (error) {
    console.error("Error deleting user", error);
    res.status(500).json({ success: false, message: "Något gick fel." });
  }
});

module.exports = router;
