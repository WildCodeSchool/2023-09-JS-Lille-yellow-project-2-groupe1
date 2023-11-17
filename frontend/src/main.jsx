import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./components/Context/GlobalContextProvider";

import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUsPage";
import ChooseLevelPage from "./components/ChooseLevelPage/ChooseLevelPage";
import LevelPage from "./components/LevelPage/LevelPage";
import Egypt from "./components/LevelPage/Egypt";
import Modern from "./components/LevelPage/ModernLevelPage/Modern";
import EndPage from "./components/EndPage/EndPage";
import Launcher from "./components/Launcher/Launcher";
import RomePage from "./components/LevelPage/RomePage/RomePage";

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
      {
        path: "/end",
        element: <EndPage />,
      },
    ],
  },
  { path: "/launcher", element: <Launcher /> },
  { path: "/end", element: <EndPage /> },
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
    path: "/Egypt",
    element: <Egypt />,
    id: "egypt",
    loader: async () => {
      try {
        const responseEgypt = await fetch("http://localhost:3310/api/egypt");
        if (!responseEgypt.ok) {
          throw new Error("Failed to fetch Egypt data");
        }
        const dataEgypt = await responseEgypt.json();
        return dataEgypt;
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
  {
    path: "/Rome",
    element: <RomePage />,
    id: "rome",
    loader: async () => {
      try {
        const responseRome = await fetch("http://localhost:3310/api/romePage");

        if (!responseRome.ok) {
          throw new Error("Failed to fetch rome data");
        }
        const dataRome = await responseRome.json();

        return dataRome;
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
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
