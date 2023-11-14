import image from "../assets/Home_img.jpg";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const imgStyle = {
    width: "310px",
    height: "200px",
    borderRadius: "5%",
  };

  const buttonStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  const handleSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <div>
      <img src={image} alt="home header pic" style={imgStyle}></img>
      <h1>Home</h1>
      <div style={buttonStyle}>
        <button onClick={handleSignIn}>Sign in</button>
        <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
}
export default HomePage;
