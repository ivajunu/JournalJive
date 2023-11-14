import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";

export default function CheckBox(props) {
  const { label, value, onChange } = props;
  return (
    <FormControlLabel
      control={<Checkbox onChange={onChange} value={value} />}
      label={label}
    />
  );
}

CheckBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};
