// import { useState } from "react";
import "./App.css";
// import Home from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import LandingPageReg from "./components/LandingPageReg";
import SignUp from "./components/SignupPage";
import Blog from "./components/BlogPage";
import Navbar from "./components/NavBar";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        {/* <Home></Home> */}
        <Blog></Blog>
        <LandingPage></LandingPage>
        <LandingPageReg></LandingPageReg>
        <SignUp></SignUp>
      </div>
    </>
  );
}

export default App;
