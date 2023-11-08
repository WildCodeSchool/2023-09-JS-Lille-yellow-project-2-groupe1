import "./GameMenu.scss";
import { useState } from "react";
import JurassicCharacter from "../../../assets/pictures/Jurassic/AvatarJurassic.png";
import Objectives from "./Objectives/Objectives";
import Inventory from "./Inventory/Inventory";

function GameMenu() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <nav className={isNavVisible ? "visible" : "hidden"}>
        <img className="jurassicCharacter" src={JurassicCharacter} alt="" />
        <hr />
        <Inventory />
        <hr />
        <Objectives />
      </nav>
      <button
        className={isNavVisible ? "closeNav" : "hiddenbutton"}
        type="button"
        onClick={toggleNavVisibility}
      >
        {isNavVisible ? "❮" : "❯"}
      </button>
    </>
  );
}

export default GameMenu;
