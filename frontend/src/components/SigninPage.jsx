import React from "react";
import Input from "../components/Forms/Input";
// import { Button } from "@mui/material/Button";

const SignInPage = () => {
  // function SignInPage() {
  return (
    <>
      <div>
        <h2>Sign in</h2>
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
