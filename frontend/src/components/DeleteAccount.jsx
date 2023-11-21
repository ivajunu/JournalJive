import FormButton from "./Forms/FormButton";
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

  const handleDelete = async () => {
    const response = await fetch("http://localhost:3000/delete-account", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username, // Rätta till här
        password: password,
      }),
    });

    const data = await response.json();
    closeDeletePopUp();
  };

  return (
    <>
      <div>
        <h1>Delete profile</h1>
      </div>
      {/* VARNA "VILL DU VERKLIGEN?" "SISTA CHANSEN ATT ÅNGRA SIG, ALLT KOMMER FÖRSVINNA ÄVEN BLOGGINLÄGG" SEn kommer en notis att kontott är raderat och vi kommer sakna dig sne skickas man till startsidan */}
      <div>
        <p>Vill du verkligen radera ditt konto? Detta kan inte ångras.</p>
        <FormButton label={"Delete"} onClick={openConfirmation}></FormButton>
        <FormButton
          label={"Back"}
          onClick={() => {
            navigate("/landing-page");
          }}
        ></FormButton>
      </div>

      {/* Bekräftelsemodal */}
      <Dialog open={popUpOpen} onClose={closeConfirmation}>
        <DialogTitle>
          Alla dina blogginlägg kommer försvinna! Är du verkligen säker?
        </DialogTitle>
        <DialogActions>
          <FormButton label={"Ja"} onClick={openDeletePopUp}></FormButton>
          <FormButton label={"Nej"} onClick={closeConfirmation}></FormButton>
        </DialogActions>
      </Dialog>

      {/* Raderingsmodal */}
      <Dialog open={deletePopUpOpen} onClose={closeDeletePopUp}>
        <DialogTitle>
          Fyll i ditt användarnamn och lösenord för att bekräfta radering.
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
          <FormButton
            label={"Bekräfta radering"}
            onClick={handleDelete}
          ></FormButton>
          <FormButton label={"Avbryt"} onClick={closeDeletePopUp}></FormButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteProfile;
