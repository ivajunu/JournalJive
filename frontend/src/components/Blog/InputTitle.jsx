import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInputTitle = styled(TextField)`
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

export default function InputTitle(props) {
  // destructing
  const { placeholder, value, onChange, type, rows } = props;
  return (
    <>
      <div>
        <StyledInputTitle
          label={placeholder}
          multiline
          maxRows={rows}
          onChange={onChange}
          value={value}
          type={type}
        />
      </div>
    </>
  );
}

InputTitle.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.node,
  type: PropTypes.string,
  rows: PropTypes.number,
};
