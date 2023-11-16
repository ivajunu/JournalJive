// import React from "react";
// import CustomButton from "./Forms/Button";
import Input from "../components/Forms/Input";
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
      {/* <div style={containerStyle}>
        <Input placeholder={"Username"} />
        <Input type={"password"} placeholder={"Password"} />
        <div style={buttonStyle}>
          <FormButton
            label="Sign In"
            variant="outlined"
            // onClick={handleClick}
          />
        </div> */}
      {/* </div> */}
      <div style={containerStyle}>
        <form action="http://localhost:3000/signinpage" method="post">
          <label>
            E-postadress
            <input name="username" placeholder="username" value="" />
          </label>
          <label>
            Lösenord
            <input
              name="password"
              placeholder="password"
              type="password"
              value=""
            />
          </label>
          <input type="submit" value="Skicka" />
        </form>
      </div>
    </>
  );
};

export default SignInPage;
