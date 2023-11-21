import "./App.css";
import image from "./assets/headerPic.png";
import { Suspense } from "react";
import { lazyWithPreload } from "react-lazy-with-preload";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
const ViewBlog = lazyWithPreload(() => import("./components/ViewBlogPost"));
const SuccessCreate = lazyWithPreload(() =>
  import("./components/SuccessCreate")
);
const GdprLanding = lazyWithPreload(() =>
  import("./components/gdpr/GdprLanding")
);

Home.preload();
Signin.preload();
Blog.preload();
EditProfile.preload();
DeleteProfile.preload();
Signup.preload();
LandingPage.preload();
LandingPageReg.preload();
GDPR.preload();
ViewBlog.preload();
GdprLanding.preload();

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
    flexDirection: "row",
    justifyContent: "space-around ",
    fontSize: "1.2rem",
  };

  const positionNav = {
    display: "flex",
    alignItems: "center",
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
            <Link to="/sign-in">Sign in</Link>
          </li>
          <li>
            <Link to="/view-blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <Link to="/">
        <LazyLoadImage
          alt="header picture for journal jive"
          height={250}
          src={image}
          visibleByDefault={true}
          width={375}
        />
      </Link>

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
          path: "/edit-profile",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <DeleteProfile />
            </Suspense>
          ),
          path: "/delete-profile",
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
          path: "/landing-page",
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
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <ViewBlog />
            </Suspense>
          ),
          path: "/view-blog",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <SuccessCreate />
            </Suspense>
          ),
          path: "/success-createuser",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <GdprLanding />
            </Suspense>
          ),
          path: "/gdpr-landing",
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
