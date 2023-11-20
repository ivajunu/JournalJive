import Button from "@mui/material/Button";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFormButton = styled(Button)`
  && {
    background-color: #7f6e55;
  }
`;

export default function FormButton(props) {
  const { label, disabled, onClick } = props;

  return (
    <StyledFormButton
      onClick={onClick}
      variant="contained"
      disabled={disabled}
      type="button"
    >
      {label}
    </StyledFormButton>
  );
}

FormButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
