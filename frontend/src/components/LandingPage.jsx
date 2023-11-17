// import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const linkStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  };

  return (
    <div>
      <h1>Welcome back Username!</h1>
      <div style={linkStyle}>
        <Link to="/EditProfile">Edit</Link>
        <Link to="/DeleteProfile">Delete account</Link>
        <p>Info om GDPR</p>
        <p>Log out</p>
      </div>
    </div>
  );
};

export default LandingPage;
