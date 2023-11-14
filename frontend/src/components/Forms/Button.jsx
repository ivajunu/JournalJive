import React from "react";
import MuiButton from "@mui/material/Button";
import PropTypes from "prop-types";

function CustomButton(props) {
  const { label, color, variant, onClick } = props;

  return (
    <div>
      <MuiButton color={color} variant={variant} onClick={onClick}>
        {label}
      </MuiButton>
    </div>
  );
}

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomButton;
