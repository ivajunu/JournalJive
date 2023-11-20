import { useState, useEffect } from "react";

function ViewBlogPost() {
  const [viewBlogs, setViewBlogs] = useState([]);

  useEffect(() => {
    // Hämtar data från databasen
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

  return (
    <>
      <h1>Blog post</h1>;
      <div
        style={{
          width: "20rem",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {viewBlogs.map((blog, index) => (
          <div key={index}>
            <h2>{blog.blog_title}</h2>
            <p>{blog.blog_text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewBlogPost;
