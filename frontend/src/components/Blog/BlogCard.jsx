import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function BlogCard() {
  //   const [logedIn, setLogedIn] = useState(false);
  const [viewBlogs, setViewBlogs] = useState([]);

  const [blogPost, setBlogPost] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/blog");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        console.log("Fetched data: ", data);

        setViewBlogs(data);
        setBlogPost(viewBlogs.blog_title);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    }

    fetchData();
  }, []);

  function DeleteBlogpost() {
    fetch("http://localhost:3000/deleteblogpost", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: blogPost,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error deleting user", error);
      });
  }

  return viewBlogs.map((blog, index) => (
    <Card
      sx={{
        width: 400,
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "solid 2px #7f6e55",
      }}
      key={index}
    >
      <CardActionArea sx={{ marginBottom: "1rem" }}>
        <CardContent sx={{ marginBottom: "1rem" }}>
          <div>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              {blog.blog_title}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{blog.blog_text}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
      {/* Ternery operator */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          size="small"
          sx={{ fontWeight: "bold", color: " rgb(34, 34, 34)" }}
        >
          Edit
        </Button>
        <Button
          size="small"
          sx={{ fontWeight: "bold", color: " rgb(34, 34, 34)" }}
          onClick={DeleteBlogpost}
        >
          Delete
        </Button>
      </div>
    </Card>
  ));
}
