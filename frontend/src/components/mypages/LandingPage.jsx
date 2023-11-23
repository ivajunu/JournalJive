// import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [userName, setUsername] = useState("");

  useEffect(() => {
    try {
      const userName = localStorage.getItem("userName");

      if (userName) {
        setUsername(JSON.parse(userName));
      }
    } catch (error) {
      console.error("Error fetching user from local storage", error);
    }
  }, []);

  const linkStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  const links = {
    margin: "0.5rem",
  };
  const logOut = {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "Center",
  };

  return (
    <div>
      <h1>Welcome back {userName}!</h1>
      <div style={linkStyle}>
        <Link to="/blog" style={links}>
          Create a blog post
        </Link>
        <Link to="/edit-profile" style={links}>
          Edit profile
        </Link>
        <Link to="/delete-account" style={links}>
          Delete account
        </Link>
        <Link to="/gdpr-landing" style={links}>
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
