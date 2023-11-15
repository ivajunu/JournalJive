import dayjs from "dayjs";
import { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export default function Date() {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  return (
    <MobileDatePicker
      value={value}
      onChange={(newValue) => setValue(newValue)}
      defaultValue={dayjs("2022-04-17")}
    />
  );
}
