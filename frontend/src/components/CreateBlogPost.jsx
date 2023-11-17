import FormButton from "./Forms/FormButton";
import InputBlog from "./Blog/InputBlog";
import InputTitle from "./Blog/InputTitle";
import styled from "styled-components";
import { useState, useEffect } from "react";

// TODO: set validation for document before posting

const RegisterForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 2px #7f6e55;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  padding: 15px;
`;

function CreateBlogPost() {
  const [title, setTitle] = useState("");
  const [blogPost, setblogPost] = useState("");
  const [blogs, setBlogs] = useState([]);

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

        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    }

    fetchData();
  }, []);

  async function handleBlogValues(e) {
    e.preventDefault();
    console.log("Click!!!");

    const blogvalues = {
      title: title,
      blogPost: blogPost,
    };

    console.log("Värden från bloggen: ", { blogvalues });

    await fetch("http://localhost:3000/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogvalues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.error("Error creating user", error);
      });
  }

  return (
    <>
      <RegisterForm>
        <form>
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
          <div style={{ padding: "5px" }}>
            <FormButton
              type="submit"
              label={"Post"}
              onClick={handleBlogValues}
            />
          </div>
        </form>
      </RegisterForm>

      <div>
        {blogs.map((blog, index) => (
          <div key={index}>
            <h2>{blog.blog_title}</h2>
            <p>{blog.blog_text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CreateBlogPost;
