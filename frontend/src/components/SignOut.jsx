import { Link } from "react-router-dom";

function SignOut() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1>You are signed out</h1>
        <Link to="/sign-in">Sign in</Link>
      </div>
    </>
  );
}

export default SignOut;
