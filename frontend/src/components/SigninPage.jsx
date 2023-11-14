import React from "react";
import image from "../assets/headerPic.png";
import Input from "../components/Forms/Input";
// import { Button } from "@mui/material/Button";

const SignInPage = () => {
  const imgStyle = {
    width: "310px",
    height: "200px",
    borderRadius: "5%",
    marginbottom: "1rem",
  };
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
        <div>
          <Input Label={"Username"} />
          <Input Label={"Password"} />
          {/* <Button color="tertiary" variant="outlined">
            Sign In
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default SignInPage;
