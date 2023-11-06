import { Outlet } from "react-router-dom";
import MainHeader from "./components/HomePage/MainHeader/MainHeader";
import "./App.scss";

function App() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
export default App;
