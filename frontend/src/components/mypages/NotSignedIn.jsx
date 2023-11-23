import { Link } from "react-router-dom";

function NotSignedIn() {
  const linkStyle = {
    display: "flex",
    justifyContent: "space-evenly",
  };
  return (
    <div>
      <h1>Oops...</h1>
      <p>To access my pages you need to log in!</p>
      <div style={linkStyle}>
        <Link to="/sign-up">Sign up</Link>
        <Link to="/sign-in">Sign in</Link>
      </div>
    </div>
  );
}

export default NotSignedIn;
