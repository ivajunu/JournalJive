// Källa styling: https://stackoverflow.com/questions/52911169/how-to-change-the-border-color-of-material-ui-textfield

import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled(TextField)`
  label.Mui-focused {
    color: red;
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: red;
    }
    & .MuiOutlinedInput-notchedOutline {
      border-color: pink;
    }
  }
`;

function Input(props) {
  return (
    <div style={{ margin: "5px" }}>
      <StyledInput
        size="small"
        id="outlined-basic"
        label={props.placeholder}
        variant="outlined"
      />
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
