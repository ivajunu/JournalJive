const express = require("express");
const router = express.Router();
const client = require("../index");

router.put("/editblogpost", async (_req, res) => {
  try {
    const { rows } = await router.client.query("UPDATE blogs");

    res.send(rows);
  } catch (error) {
    console.error("Error fetching blogs", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
