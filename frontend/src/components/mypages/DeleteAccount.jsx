import FormButton from "../Forms/FormButton";
import { useNavigate } from "react-router-dom";

const DeleteProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>RADERA PROFIL OCH ANVÄNDARUPPGIFTER</h1>
      </div>
      {/* VARNA "VILL DU VERKLIGEN?" "SISTA CHANSEN ATT ÅNGRA SIG, ALLT KOMMER FÖRSVINNA ÄVEN BLOGGINLÄGG" SEn kommer en notis att kontott är raderat och vi kommer sakna dig sne skickas man till startsidan */}
      <div>
        <FormButton
          label={"Back"}
          onClick={() => {
            navigate("/landing-page");
          }}
        ></FormButton>
      </div>
    </>
  );
};

export default DeleteProfile;
