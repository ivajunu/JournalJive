import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useState } from "react";

export default function Date() {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        value={value}
        onChange={(newAge) => {
          setValue(newAge);
          console.log(dayjs(newAge).format("DD-MM-YYYY"));
        }}
        label={"Birthday"}
        defaultValue={dayjs("2022-04-17")}
      />
    </LocalizationProvider>
  );
}
