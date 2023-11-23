import { useState, useEffect } from "react";
import FormButton from "./Forms/FormButton";
import { useNavigate } from "react-router-dom";

const SuccessCreate = () => {
  const [userName, setUsername] = useState("");

  const navigate = useNavigate();

  const welcomeStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "left",
    border: "solid 2px #7f6e55",
    borderRadius: "15px",
    boxShadow: "0 3px 10px rgb(164 157 146 / 0.2)",
    padding: "1rem",
    width: "90%",
    height: "100%",
    margin: "0.5rem",
  };

  useEffect(() => {
    try {
      const userName = localStorage.getItem("userName");

      if (userName) {
        setUsername(JSON.parse(userName));
      }
    } catch (error) {
      console.error("Error fetching user from local storage", error);
    }
  }, []);

  return (
    <div style={welcomeStyle}>
      <h1>Hi {userName}!</h1>
      <div>
        <p>Welcome to Journal Jive, your go-to source for all things!</p>
        <p>
          We are so excited to have you on board. Get ready for a journey of
          discovery and inspiration. Dive into our latest posts and join the
          conversation. Your thoughts matter!
        </p>
        <p>Happy reading & writing!</p>
        <p>Best, Journal Jive Team</p>
      </div>
      <div>
        <FormButton
          label={"Next"}
          onClick={() => {
            navigate("/landing-page");
          }}
        ></FormButton>
      </div>
    </div>
  );
};
export default SuccessCreate;
