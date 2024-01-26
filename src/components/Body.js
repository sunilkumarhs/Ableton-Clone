import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./mainSection/MainPage";
import LiveSection from "./mainSection/LiveSection";
import Navbar from "./Navbar";
import VideoPlayer from "./mainSection/VideoPlayer";

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/live",
        element: <LiveSection />,
      },
    ],
  },
]);

export default Body;
