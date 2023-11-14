// Källa styling: https://stackoverflow.com/questions/52911169/how-to-change-the-border-color-of-material-ui-textfield

import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled(TextField)`
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

function Input(props) {
  const { placeholder, value, onChange, type } = props;
  return (
    <div style={{ margin: "7px" }}>
      <StyledInput
        size="small"
        label={placeholder}
        variant="outlined"
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.node,
  type: PropTypes.string,
};

export default Input;
