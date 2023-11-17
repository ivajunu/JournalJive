const express = require("express");
const router = express.Router();
const client = require("../index");

router.get("/blog", async (_req, res) => {
  try {
    const { rows } = await router.client.query("SELECT * FROM blogs");
    console.log("Hämtar alla bloggar");
    res.send(rows);
  } catch (error) {
    console.error("Error fetching blogs", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/blog", async (req, res) => {
  try {
    const { title, blogPost } = req.body;
    console.log("GRATTIS du har postat en blogg");

    console.log(req.body);

    const result = await router.client.query(
      "INSERT INTO blogs (blog_title, blog_text) VALUES ($1, $2);",
      [title, blogPost]
    );

    res
      .status(201)
      .json({ message: "blog post created successfully", data: result.rows });
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
