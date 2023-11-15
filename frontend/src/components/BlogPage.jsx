// import FormButton from "./Forms/FormButton";
// import Input from "./Forms/Input";
// import styled from "styled-components";
// import { useState, useEffect } from "react";
import InputTitle from "./Blog/InputTitle";

function BlogPage() {
  // const [title, setTitle] = useState("");
  // const [blogPost, setBlogPost] = useState("");
  // const [disabled, setDisabled] = useState(true);

  // function handleFormValues(e) {
  //   e.preventDefault();
  //   const formvalues = {
  //     title: title,
  //     blogPost: blogPost,
  //   };

  return (
    <>
      <div>
        <h1>Blog</h1>
        <InputTitle />
      </div>

      <form>
        {/* <Input>
            placeholder={"Title"}
            value={title}
            onChange=
            {(e) => {
              setTitle(e.target.value);
            }}
          </Input>
          <Input>
            placeholder={"Blog post"}
            value={blogPost}
            onChange=
            {(e) => {
              setBlogPost(e.target.value);
            }}
          </Input> */}
      </form>
    </>
  );
}
// }
export default BlogPage;
