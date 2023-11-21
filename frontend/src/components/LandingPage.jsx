// import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const linkStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  };
  const links = {
    margin: "1rem",
  };
  const logOut = {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "Center",
  };

  return (
    <div>
      <h1>Welcome back!</h1>
      <div style={linkStyle}>
        <Link to="/blog" style={links}>
          Create a blog post
        </Link>
        <Link to="/EditProfile" style={links}>
          Edit profile
        </Link>
        <Link to="/DeleteProfile" style={links}>
          Delete account
        </Link>
        <Link to="/GdprLanding" style={links}>
          GDPR
        </Link>
        <div style={logOut}>
          <Link to="/" style={links}>
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
