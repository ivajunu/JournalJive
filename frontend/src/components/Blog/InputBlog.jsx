import TextField from "@mui/material/TextField";
import styled from "styled-components";

// const BlogForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   justify-content: center;
// `;

const StyledInputBlog = styled(TextField)`
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  label.Mui-focused {
    color: #7f6e55;
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #baaa91;
    }
    & .MuiOutlinedInput-notchedOutline {
      border-color: #baaa91;
    }
  }
`;

export default function InputBlog() {
  return (
    <>
      <StyledInputBlog>
        <div>
          <TextField
            label="Write about your day"
            multiline
            style={{ width: "25rem", marginBottom: "1rem" }}
            rows={20}
          />
        </div>
      </StyledInputBlog>
    </>
  );
}
