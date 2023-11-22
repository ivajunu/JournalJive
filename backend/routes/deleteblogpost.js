const express = require("express");
const router = express.Router();
const client = require("../index");

router.delete("/deleteblogpost", async (req, res) => {
  try {
    const { title } = req.body;
    console.log(req.body);

    const result = await router.client.query(
      "DELETE FROM blogs WHERE blog_title = $1;",
      [title]
    );

    if (result.rowCount > 0) {
      res
        .status(200)
        .json({ success: true, message: "Blogginlägget har raderats." });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Inlägget hittades inte." });
    }
  } catch (error) {
    console.error("Error deleting blogpost", error);
    res.status(500).json({ success: false, message: "Något gick fel." });
  }
});

module.exports = router;
