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

  const blogPost = {
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "Center",
  };
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
  const hStyle = {
    margin: "3rem",
    borderBottom: "solid 2px #7f6e55",
  };

  return (
    <div>
      <div style={hStyle}>
        <h1>Welcome back {userName}!</h1>
      </div>
      <div style={blogPost}>
        <Link to="/blog" style={links}>
          Create a blog post
        </Link>
      </div>
      <div style={linkStyle}>
        <Link to="/gdpr-landing" style={links}>
          GDPR
        </Link>
        <Link to="/edit-profile" style={links}>
          Edit profile
        </Link>
        <Link to="/delete-account" style={links}>
          Delete account
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
