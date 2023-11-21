import FormButton from "./Forms/FormButton";
import InputBlog from "./Blog/InputBlog";
import InputTitle from "./Blog/InputTitle";
import styled from "styled-components";
import { useState } from "react";
import BlogCard from "./Blog/BlogCard";

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
  margin: 0.5rem;
  width: 95%;
`;

function CreateBlogPost() {
  const [title, setTitle] = useState("");
  const [blogPost, setblogPost] = useState("");

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
      <p>Koppla bloggen med användaren som loggar in.</p>
      <p>edit och delete-knapp i cardsen</p>
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <BlogCard />
      </div>
    </>
  );
}

export default CreateBlogPost;
