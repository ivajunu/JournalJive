import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./HomePage";
import SignIn from "./SigninPage";

function Root() {
  const navStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
  };

  const positionNav = {
    display: "flex",
    // justifyContent: "center",
    position: "fixed",
    top: 0,
    width: "100%",
  };

  return (
    <>
      <nav style={positionNav}>
        <ul style={navStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
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
