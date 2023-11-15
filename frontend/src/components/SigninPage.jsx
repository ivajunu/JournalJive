import React from "react";

import Input from "../components/Forms/Input";
// import CustomButton from "./Forms/Button";
import FormButton from "./Forms/FormButton";

const SignInPage = () => {
  // const imgStyle = {
  //   width: "310px",
  //   height: "200px",
  //   borderRadius: "5%",
  //   marginbottom: "2rem",
  // };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const buttonStyle = { margin: "1rem" };

  return (
    <>
      {/* <div>
        <img src={image} alt="home header pic" style={imgStyle}></img>
      </div> */}
      <div>
        {/* <h2>Sign in</h2> */}
        <p>Please put your credentials in the fields</p>
      </div>
      <div style={containerStyle}>
        <Input placeholder={"Username"} />
        <Input placeholder={"Password"} />
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
