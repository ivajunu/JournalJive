import image from "../assets/Home_img.jpg";

function HomePage() {
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

  return (
    <div>
      <img src={image} alt="home header pic" style={imgStyle}></img>
      <h1>Home</h1>
      <div style={buttonStyle}>
        <button>Sign in</button>
        <a href="/signup">Sign up</a>
      </div>
    </div>
  );
}
export default HomePage;
