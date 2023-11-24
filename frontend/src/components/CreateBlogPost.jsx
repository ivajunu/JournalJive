import FormButton from "./Forms/FormButton";
import InputBlog from "./Blog/InputBlog";
import InputTitle from "./Blog/InputTitle";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { CardActionArea, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import BlogCard from "./Blog/BlogCard";
import { useNavigate } from "react-router-dom";

// TODO: set validation for document before posting

const RegisterForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 2px #7f6e55;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  padding: 1rem;
  margin: 1rem;
  width: 90%;
`;

function CreateBlogPost() {
  const [title, setTitle] = useState("");
  const [blogPost, setblogPost] = useState("");
  const navigate = useNavigate();
  const [viewBlogs, setViewBlogs] = useState([]);
  const [blogPostTitle, setBlogPostTitle] = useState("");

  function fetchData() {
    fetch("/blog", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setViewBlogs(data);
        setBlogPostTitle(data[0].blog_title);
        console.log(blogPostTitle);
      })
      .catch((error) => {
        console.error("Error deleting user", error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleBlogValues(e) {
    e.preventDefault();

    const blogvalues = {
      title: title,
      blogPost: blogPost,
    };

    console.log("Värden från bloggen: ", { blogvalues });

    await fetch("/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogvalues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        fetchData();
        setTitle("");
        setblogPost("");
      })
      .catch((error) => {
        console.error("Error creating blogpost", error);
      });
  }

  // TODO: fix delete so that it deletes the right blogpost
  // Koppla bloggen med användaren som loggar in.
  // edit och delete-knapp i cardsen

  // function DeleteBlogpost() {
  //   fetch("http://localhost:3000/deleteblogpost", {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       title: blogPostTitle,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       fetchData();
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting user", error);
  //     });
  // }

  return (
    <>
      <RegisterForm>
        <form style={{ width: "95%" }}>
          <InputTitle
            placeholder={"Title"}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <InputBlog
            placeholder={"Write something"}
            value={blogPost}
            onChange={(e) => {
              setblogPost(e.target.value);
            }}
          />
          <div style={{ padding: "5px", margin: "0.5rem" }}>
            <FormButton
              type="submit"
              label={"Post"}
              onClick={handleBlogValues}
            />

            <FormButton
              label={"Back"}
              onClick={() => {
                navigate("/landing-page");
              }}
            ></FormButton>
          </div>
        </form>
      </RegisterForm>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        {/* <BlogCard /> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          margin: "1rem",
        }}
      >
        {viewBlogs
          ? viewBlogs.map((blog, index) => (
              <Card
                sx={{
                  width: 350,
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
                      <Typography sx={{ fontSize: "14px" }}>
                        {blog.blog_text}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                {/* <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    size="small"
                    sx={{ fontWeight: "bold", color: "rgb(34, 34, 34)" }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    sx={{ fontWeight: "bold", color: "rgb(34, 34, 34)" }}
                    onClick={DeleteBlogpost}
                  >
                    Delete
                  </Button> */}
                {/* </div> */}
              </Card>
            ))
          : null}
      </div>
    </>
  );
}

export default CreateBlogPost;
