import MuiButton from "@mui/material/Button";
import PropTypes from "prop-types";
import deleteIkon from "../../assets/trashIkon.svg";

function CustomButton(props) {
  const { label, variant, onClick } = props;

  return (
    <div>
      <MuiButton
        sx={{
          width: "10px",
          height: "35px",
          backgroundColor: "#ba1a08",
          color: "#ffffff",
          ":hover": {
            backgroundColor: "#ee422fe5",
          },
        }}
        variant={variant}
        onClick={onClick}
      >
        {label}
        <img
          style={{ width: "20px", height: "20px", marginLeft: "3px" }}
          src={deleteIkon}
          alt="delete icon"
        ></img>
      </MuiButton>
    </div>
  );
}

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomButton;
