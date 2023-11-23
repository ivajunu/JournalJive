import {
  Link,
  // useNavigate
} from "react-router-dom";
import { useEffect, useState } from "react";
import BlogCardPublic from "./Blog/BlogCardPublic";

function HomePage() {
  // const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
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

  useEffect(() => {
    function IsloggedIn() {
      if (userName === "") {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }
    IsloggedIn();
  }, [userName]);

  const linkStyle = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
    <>
      {loggedIn ? (
        <div>
          <h1>Welcome!</h1>
          <div style={linkStyle}>
            <Link to="/sign-up">Sign up</Link>
            <Link to="/sign-in">Sign in</Link>
            {/* <div style={buttonStyle}>
        <button onClick={handleSignIn}>Sign in</button>
      </div> */}
          </div>
        </div>
      ) : (
        <div>
          <h1>Most recent blogposts</h1>
          <BlogCardPublic />
        </div>
      )}
    </>
  );
}
export default HomePage;
