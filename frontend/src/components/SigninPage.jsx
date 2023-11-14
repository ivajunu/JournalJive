import React from "react";
import image from "../assets/headerPic.png";
import Input from "../components/Forms/Input";
import CustomButton from "./Forms/Button";

const SignInPage = () => {
  const imgStyle = {
    width: "310px",
    height: "200px",
    borderRadius: "5%",
    marginbottom: "2rem",
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const buttonStyle = { margin: "1rem" };

  // function SignInPage() {
  return (
    <>
      {" "}
      <div>
        <img src={image} alt="home header pic" style={imgStyle}></img>
      </div>
      <div>
        {/* <h2>Sign in</h2> */}
        <p>Please put your credentials in the fields</p>
      </div>
      <div style={containerStyle}>
        <Input Label={"Username"} />
        <Input Label={"Password"} />
        <div style={buttonStyle}>
          <CustomButton
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
