const express = require("express");
const router = express.Router();

const client = require("../index");

// router.post("/blog", async (request, response) => {
//     try {
//         const { title, blogPost } = request.body;

//     const result = await router.client.query(
//       "INSERT INTO blogs (blog_title, blog_text) VALUES ($1, $2) RETURNING *",
//       [title, blogPost]
//     );

//   } catch (error) {
//     console.error(error);
//     response.status(500).send("Server error");
//   }
// });

router.post("/blog", async (req, res) => {
  try {
    const { title, blogPost } = req.body;

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
