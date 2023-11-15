import {
  Link,
  // useNavigate
} from "react-router-dom";

function HomePage() {
  // const navigate = useNavigate();

  const linkStyle = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
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
  );
}
export default HomePage;
