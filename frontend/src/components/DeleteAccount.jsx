import FormButton from "./Forms/FormButton";
import { useNavigate } from "react-router-dom";

const DeleteProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>RADERA PROFIL OCH ANVÄNDARUPPGIFTER</h1>
      </div>
      <div>
        <FormButton
          label={"Back"}
          onClick={() => {
            navigate("/LandingPage");
          }}
        ></FormButton>
      </div>
    </>
  );
};

export default DeleteProfile;
