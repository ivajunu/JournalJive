// import React from "react";

import Input from "../components/Forms/Input";
// import CustomButton from "./Forms/Button";
import FormButton from "./Forms/FormButton";

const SignInPage = () => {
  const textStyle = {
    margin: "2rem",
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const buttonStyle = { margin: "1rem" };

  return (
    <>
      <div style={textStyle}>
        <p>Please put your credentials in the fields</p>
      </div>
      <div style={containerStyle}>
        <Input placeholder={"Username"} />
        <Input type={"password"} placeholder={"Password"} />
        <div style={buttonStyle}>
          <FormButton
            label="Sign In"
            variant="outlined"
            // onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
