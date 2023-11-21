import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function BlogCard() {
  //   const [logedIn, setLogedIn] = useState(false);
  const [viewBlogs, setViewBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        console.log("Fetched data: ", data);

        setViewBlogs(data);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    }

    fetchData();
  }, []);

  return viewBlogs.map((blog, index) => (
    <Card
      sx={{
        width: 400,
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      key={index}
    >
      <CardActionArea>
        <CardContent>
          <div>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              {blog.blog_title}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{blog.blog_text}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
      {/* Ternery operator */}
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  ));
}
