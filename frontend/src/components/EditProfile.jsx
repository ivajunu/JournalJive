import FormButton from "./Forms/FormButton";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>ÄNDRA ELLER RADERA PROFIL OCH ANVÄNDARUPPGIFTER</h1>
      </div>
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

export default EditProfile;
