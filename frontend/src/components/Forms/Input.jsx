import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

// export function InputProps() {
//   label: string;
//   placeholder: string;
// }

function Input(props) {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label={props.Label} variant="outlined" />
      </Box>
    </div>
  );
}

Input.propTypes = {
  Label: PropTypes.string,
};

export default Input;
