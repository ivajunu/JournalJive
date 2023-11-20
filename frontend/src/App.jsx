import "./App.css";
// import image from "./assets/headerPic.png";
import { Suspense } from "react";
import { lazyWithPreload } from "react-lazy-with-preload";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = lazyWithPreload(() => import("./components/HomePage"));
const Signin = lazyWithPreload(() => import("./components/SigninPage"));
const Signup = lazyWithPreload(() => import("./components/SignupPage"));
const LandingPage = lazyWithPreload(() => import("./components/LandingPage"));
const LandingPageReg = lazyWithPreload(() =>
  import("./components/LandingPageReg")
);
const Blog = lazyWithPreload(() => import("./components/BlogPage"));
const EditProfile = lazyWithPreload(() => import("./components/EditProfile"));
const DeleteProfile = lazyWithPreload(() =>
  import("./components/DeleteAccount")
);
const GDPR = lazyWithPreload(() => import("./components/gdpr/GDPR"));

Home.preload();
Signin.preload();
Blog.preload();
EditProfile.preload();
DeleteProfile.preload();
Signup.preload();
LandingPage.preload();
LandingPageReg.preload();
GDPR.preload();

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function Root() {
  const navStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-evenly",
  };

  const positionNav = {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    marginBottom: "1rem,",
  };

  const liStyle = {
    marginRight: "20px",
  };
  return (
    <>
      <nav style={positionNav}>
        <ul style={navStyle}>
          <li style={liStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={liStyle}>
            <Link to="/sign-in">Sign in</Link>
          </li>
          <li style={liStyle}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <div>
        {/* <LazyLoadImage alt="" height={800} src={image1} width={800} /> */}
        <img src={image} alt="home header pic"></img>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <Home />
            </Suspense>
          ),
          path: "/",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <Signin />
            </Suspense>
          ),
          path: "/sign-in",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <Blog />
            </Suspense>
          ),
          path: "/blog",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <EditProfile />
            </Suspense>
          ),
          path: "/EditProfile",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <DeleteProfile />
            </Suspense>
          ),
          path: "/DeleteProfile",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <Signup />
            </Suspense>
          ),
          path: "/sign-up",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <LandingPage />
            </Suspense>
          ),
          path: "/LandingPage",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <LandingPageReg />
            </Suspense>
          ),
          path: "/landing-reg",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <GDPR />
            </Suspense>
          ),
          path: "/gdpr-info",
        },
      ],
      element: <Root />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <div>
          <Outlet />
        </div>
      </RouterProvider>
    </>
  );
}

export default App;
