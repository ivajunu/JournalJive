const express = require("express");
const router = express.Router();
const client = require("../index");

router.delete("/deleteaccount", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await client.query(
      "DELETE FROM person_datas WHERE person_username = $1 AND person_password = $2",
      [username, password]
    );

    if (result.rowCount > 0) {
      res
        .status(200)
        .json({ success: true, message: "Användaren har raderats." });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Användaren hittades inte." });
    }

    client.release();
  } catch (error) {
    console.error("Error deleting user", error);
    res.status(500).json({ success: false, message: "Något gick fel." });
  }
});

module.exports = router;
