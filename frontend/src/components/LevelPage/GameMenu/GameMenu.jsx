import "./GameMenu.scss";
import { useState } from "react";
import JurassicCharacter from "../../../assets/pictures/AvatarJurassique.png";
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
        <img className="JurassiqueCharacter" src={JurassicCharacter} alt="" />
        <hr />
        <button type="button" className="GameMenuButton">
          <Inventory />
        </button>
        <hr />
        <button type="button" className="GameMenuButton">
          <Objectives />
        </button>
      </nav>
      <button
        className="CloseButton"
        type="button"
        onClick={toggleNavVisibility}
      >
        {isNavVisible ? "Fermer" : "Ouvrir"}
      </button>
    </>
  );
}

export default GameMenu;
