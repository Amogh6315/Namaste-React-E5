import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu.jsx";
import UserContext from "./utils/UserContext.js";
// import Grocery from "./components/Grocery.jsx";

const Grocery = lazy(() => import("./components/Grocery.jsx"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  // we will fetch data from json of userName
  useEffect(() => {
    const data = {
      name: "Amogh Gupta",
    };
    setUserName(data.name);
  }, []);
  return (
    // we can provide any value like this also
    // <UserContext.Provider value={{ loggedInUser: "userName", setUserName }}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    // something outside of usercontext provide will take default value
    // and we can pass multiple usercontext for any component that will take that particular value
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..........</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout/>);
