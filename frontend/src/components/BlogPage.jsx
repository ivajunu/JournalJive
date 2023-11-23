import CreateBlogPost from "./CreateBlogPost";
// import styled from "styled-components";
// const StyledDiv = styled.div`
//   display: flex;
//   flexdirection: column;
// `;
function BlogPage() {
  return (
    <>
      <div>
        <h1>Blog</h1>
      </div>
      <div>
        <CreateBlogPost />
      </div>
    </>
  );
}

export default BlogPage;
