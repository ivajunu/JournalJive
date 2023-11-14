import image from "../assets/headerPic.png";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const imgStyle = {
    width: "310px",
    height: "200px",
    borderRadius: "5%",
  };

  // const buttonStyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "10px",
  // };
  const handleSignUp = () => {
    navigate("/sign-un");
  };
  const handleSignIn = () => {
    navigate("/sign-in");
  };
  return (
    <div>
      <img src={image} alt="home header pic" style={imgStyle}></img>
      <h1>Welcome!</h1>
      <Link to="/sign-up">Sign up</Link>
      <Link to="/sign-in">Sign in</Link>
      {/* <div style={buttonStyle}>
        <button onClick={handleSignIn}>Sign in</button>
      </div> */}
    </div>
  );
}
export default HomePage;
