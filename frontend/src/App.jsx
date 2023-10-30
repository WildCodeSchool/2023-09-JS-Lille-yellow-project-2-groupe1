import { useEffect, useState } from "react";
import Level from "./components/LevelPage/LevelPage";
import "./App.scss";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3310/api/data")
      .then((response) => response.json())
      .then((datas) => setData(datas))
      .catch((error) => console.error(error));
  }, []);
  if (!data) {
    return <div>Chargement en cours...</div>;
  }

  return <Level dino={data} />;
}
export default App;
