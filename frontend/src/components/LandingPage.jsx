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
        <Link to="/blog">Create a blog post</Link>
        <Link to="/EditProfile">Edit</Link>
        <Link to="/DeleteProfile">Delete account</Link>
        <Link to="/gdpr-info">Info om GDPR</Link>
        <p>Log out</p>
      </div>
    </div>
  );
};

export default LandingPage;
