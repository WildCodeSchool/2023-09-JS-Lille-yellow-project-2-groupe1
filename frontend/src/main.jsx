import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "app",
    loader: async () => {
      try {
        const responseDino = await fetch("http://localhost:3310/api/dinosaurs");
        const responseEra = await fetch("http://localhost:3310/api/era");

        if (!responseDino.ok) {
          throw new Error("Failed to fetch dinosaur data");
        }
        const dataDino = await responseDino.json();

        if (!responseEra.ok) {
          throw new Error("Failed to fetch era data");
        }
        const dataEra = await responseEra.json();

        return { dinosaurs: dataDino, era: dataEra };
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
