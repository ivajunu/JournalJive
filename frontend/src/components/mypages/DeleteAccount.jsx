import FormButton from "../Forms/FormButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

const DeleteProfile = () => {
  const navigate = useNavigate();
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [deletePopUpOpen, setDeletePopUpOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const openConfirmation = () => {
    setPopUpOpen(true);
  };

  const closeConfirmation = () => {
    setPopUpOpen(false);
  };

  const openDeletePopUp = () => {
    setPopUpOpen(false);
    console.log("Du tryckte Ja för att radera kontot");
    setDeletePopUpOpen(true);
  };

  const closeDeletePopUp = () => {
    setDeletePopUpOpen(false);
  };

  function Delete() {
    fetch("/deleteaccount", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        passWord: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        closeDeletePopUp();
        navigate("/");
      })
      .catch((error) => {
        console.error("Error deleting user", error);
      });
  }

  return (
    <>
      <div>
        <h1>Delete profile</h1>
      </div>
      <div>
        <p>
          Do you really want to delete your account? This action cannot be
          undone.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FormButton label={"Delete"} onClick={openConfirmation}></FormButton>
          <FormButton
            label={"Back"}
            onClick={() => {
              navigate("/landing-page");
            }}
          ></FormButton>
        </div>
      </div>
      <Dialog open={popUpOpen} onClose={closeConfirmation}>
        <DialogTitle>
          All your blog posts will disappear! Are you absolutely sure?
        </DialogTitle>
        <DialogActions>
          <FormButton label={"Yes"} onClick={openDeletePopUp}></FormButton>
          <FormButton label={"No"} onClick={closeConfirmation}></FormButton>
        </DialogActions>
      </Dialog>

      <Dialog open={deletePopUpOpen} onClose={closeDeletePopUp}>
        <DialogTitle>
          Enter your username and password to confirm deletion. We're gonna miss
          you!
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Användarnamn"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Lösenord"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <FormButton label={"Bekräfta radering"} onClick={Delete}></FormButton>
          <FormButton label={"Avbryt"} onClick={closeDeletePopUp}></FormButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteProfile;
