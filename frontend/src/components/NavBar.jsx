import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./HomePage";
import SignIn from "./SignInPage";

function Root() {
  const navStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
  };

  const positionNav = {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100%",
  };

  const h3Styling = {
    fontSize: "15px",
    marginRight: "20px",
  };

  const liStyle = {
    marginRight: "20px",
  };

  return (
    <>
      <nav style={positionNav}>
        <h3 style={h3Styling}>JournalJive</h3>
        <ul style={navStyle}>
          <li style={liStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={liStyle}>
            <Link to="/SignInPage">Sign in</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

function NavBar() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <SignIn />, path: "/SigninPage" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default NavBar;
