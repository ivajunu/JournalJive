import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function BlogCardPublic() {
  const [viewBlogs, setViewBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/blog");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setViewBlogs(data);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    }

    fetchData();
  }, []);

  return viewBlogs.map((blog, index) => (
    <Card sx={{ maxWidth: 400, marginBottom: "2rem" }} key={index}>
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
    </Card>
  ));
}
