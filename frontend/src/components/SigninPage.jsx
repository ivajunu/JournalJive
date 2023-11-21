import { useState } from "react";
// import CustomButton from "./Forms/Button";
import Input from "../components/Forms/Input";
import FormButton from "./Forms/FormButton";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [loggedInUser, SetLoggedInUser] = useState([]);

  const textStyle = {
    margin: "2rem",
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const buttonStyle = { margin: "1rem" };

  async function handleClick(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("userName", JSON.stringify(userName));
        console.log(
          "user från localStorage:",
          localStorage.getItem("userName")
        );
        // varje gpng jag plockar bort console loggen blir det massa fel
        console.log(data.message);
        navigate("/LandingPage");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during sign-in", error);
    }
  }

  return (
    <>
      <div style={textStyle}>
        <p>Please put your credentials in the fields</p>
      </div>
      <div style={containerStyle}>
        <Input
          placeholder={"Username"}
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div style={buttonStyle}>
          <FormButton
            label="Sign In"
            variant="outlined"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
