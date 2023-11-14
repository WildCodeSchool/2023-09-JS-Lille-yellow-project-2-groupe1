import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUsPage";
import ChooseLevelPage from "./components/ChooseLevelPage/ChooseLevelPage";
import LevelPage from "./components/LevelPage/LevelPage";
import Modern from "./components/LevelPage/ModernLevelPage/Modern";

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
    id: "ChooseLevelPage",
    loader: async () => {
      try {
        const responseEra = await fetch("http://localhost:3310/api/era");

        if (!responseEra.ok) {
          throw new Error("Failed to fetch era data");
        }
        const dataEra = await responseEra.json();

        return dataEra;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  },
  {
    path: "/LevelPage",
    element: <LevelPage />,
    id: "levelPage",
    loader: async () => {
      try {
        const responseDino = await fetch("http://localhost:3310/api/dinosaurs");

        if (!responseDino.ok) {
          throw new Error("Failed to fetch dinosaur data");
        }
        const dataDino = await responseDino.json();

        return dataDino;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  },
  {
    path: "/Modern",
    element: <Modern />,
    id: "modern",
    loader: async () => {
      try {
        const responseModern = await fetch("http://localhost:3310/api/modern");

        if (!responseModern.ok) {
          throw new Error("Failed to fetch modern data");
        }
        const dataModern = await responseModern.json();

        return dataModern;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
