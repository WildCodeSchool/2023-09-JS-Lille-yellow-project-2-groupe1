// import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import Level from "./components/LevelPage/LevelPage";
import "./App.scss";

function App() {
  const data = useRouteLoaderData("app");

  return <Level dino={data} />;
}
export default App;
