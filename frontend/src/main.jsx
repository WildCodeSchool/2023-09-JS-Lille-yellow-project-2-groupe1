import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUsPage";
import ChooseLevelPage from "./components/ChooseLevelPage/ChooseLevelPage";
import LevelPage from "./components/LevelPage/LevelPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/ChooseLevelPage",
    element: <ChooseLevelPage />,
  },
  {
    path: "/LevelPage",
    element: <LevelPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
