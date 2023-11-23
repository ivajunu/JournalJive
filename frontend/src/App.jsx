import "./App.css";
import image from "./assets/headerPic.png";
import { Suspense, useState } from "react";
import { lazyWithPreload } from "react-lazy-with-preload";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = lazyWithPreload(() => import("./components/HomePage"));
const Signin = lazyWithPreload(() => import("./components/SigninPage"));
const Signup = lazyWithPreload(() => import("./components/SignupPage"));
const LandingPage = lazyWithPreload(() =>
  import("./components/mypages/LandingPage")
);
const LandingPageReg = lazyWithPreload(() =>
  import("./components/LandingPageReg")
);
const Blog = lazyWithPreload(() => import("./components/BlogPage"));
const EditProfile = lazyWithPreload(() =>
  import("./components/mypages/EditProfile")
);
const DeleteAccount = lazyWithPreload(() =>
  import("./components/mypages/DeleteAccount")
);
const GDPR = lazyWithPreload(() => import("./components/gdpr/GDPR"));
const ViewBlog = lazyWithPreload(() => import("./components/ViewBlogPost"));
const SuccessCreate = lazyWithPreload(() =>
  import("./components/SuccessCreate")
);
const GdprLanding = lazyWithPreload(() =>
  import("./components/gdpr/GdprLanding")
);
const UserTerms = lazyWithPreload(() => import("./components/gdpr/UserTerms"));
const UserTermsLanding = lazyWithPreload(() =>
  import("./components/gdpr/UserTermsLanding")
);
const Signout = lazyWithPreload(() => import("./components/SignOut"));

Home.preload();
Signin.preload();
Blog.preload();
EditProfile.preload();
DeleteAccount.preload();
Signup.preload();
LandingPage.preload();
LandingPageReg.preload();
GDPR.preload();
ViewBlog.preload();
GdprLanding.preload();
UserTerms.preload();
UserTermsLanding.preload();
Signout.preload();

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function Root() {
  const [isSignedIn /*setIsSignedIn*/] = useState(false);

  const navStyle = {
    listStyleType: "none",
    display: "flex",
  };

  const positionNav = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <>
      <nav style={positionNav}>
        <ul style={navStyle}>
          <li>
            <Link style={{ marginRight: "1rem" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ marginRight: "1rem" }}
              to={isSignedIn ? "sign-out" : "/sign-in"}
            >
              {isSignedIn ? "Sign out" : "Sign in"}
            </Link>
          </li>
          <li>
            <Link style={{ marginRight: "1rem" }} to="/view-blog">
              Blog
            </Link>
          </li>
          {isSignedIn && (
            <li>
              <Link style={{ marginRight: "1rem" }} to="/landing-page">
                My page
              </Link>
            </li>
          )}
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
              <Signout />
            </Suspense>
          ),
          path: "/sign-out",
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
              <DeleteAccount />
            </Suspense>
          ),
          path: "/delete-account",
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
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <UserTerms />
            </Suspense>
          ),
          path: "/user-terms",
        },
        {
          element: (
            <Suspense fallback={<>Loading...</>}>
              <UserTermsLanding />
            </Suspense>
          ),
          path: "/userterms-landing",
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
