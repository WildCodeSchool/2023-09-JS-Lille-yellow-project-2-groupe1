import "./GameMenu.scss";
import { useState } from "react";
import JurassicCharacter from "../../../assets/pictures/AvatarJurassique.png";
import Bag from "../../../assets/pictures/Bag.png";
import NoteBook from "../../../assets/pictures/NoteBook.png";

function GameMenu() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <nav className={isNavVisible ? "visible" : "hidden"}>
        <img
          className="JurassiqueCharacter"
          src={JurassicCharacter}
          draggable="false"
          alt=""
        />
        <hr />
        <button type="button" className="GameMenuButton">
          <img className="Bag" src={Bag} alt="Inventaire" draggable="false" />
        </button>
        <hr />
        <button type="button" className="GameMenuButton">
          <img
            className="NoteBook"
            src={NoteBook}
            alt="Objectif"
            draggable="false"
          />
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
