import TextField from "@mui/material/TextField";

export default function InputTitle() {
  return (
    <div>
      <TextField label="Multiline" multiline maxRows={4} />
      <TextField
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
      />
      <TextField
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
    </div>
  );
}
