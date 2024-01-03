import React, { useEffect } from "react";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import Videoplay from "./Videoplay";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/play",
      element: <Videoplay />,
    },
  ]);

  return (
    <div className="w-full ">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
