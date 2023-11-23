// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormButton from "../Forms/FormButton";
import NotSignedIn from "./NotSignedIn";

const LandingPage = () => {
  const [userName, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    function IsloggedIn() {
      if (userName === "") {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
    }
    IsloggedIn();
  }, [userName]);

  function handlelogout() {
    localStorage.setItem("loggedIn", JSON.stringify(false));
    localStorage.setItem("userName", JSON.stringify(""));
    navigate("/");
  }

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
  // const logOut = {
  //   marginTop: "2rem",
  //   display: "flex",
  //   justifyContent: "Center",
  // };
  const hStyle = {
    margin: "3rem",
    borderBottom: "solid 2px #7f6e55",
  };

  return (
    <div>
      {loggedIn ? (
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
            <Link to="/userterms-landing" style={links}>
              Terms and conditions
            </Link>
            <Link to="/edit-profile" style={links}>
              Edit profile
            </Link>
            <Link to="/delete-account" style={links}>
              Delete account
            </Link>

            <FormButton label={"Log out"} onClick={handlelogout} />
            {/* <div style={logOut}>
          <Link to="/" style={links} oncli>
            Log out
          </Link>
        </div> */}
          </div>
        </div>
      ) : (
        <NotSignedIn />
      )}
    </div>
  );
};

export default LandingPage;
