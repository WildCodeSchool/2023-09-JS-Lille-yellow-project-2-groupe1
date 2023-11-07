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
        <img className="jurassicCharacter" src={JurassicCharacter} alt="" />
        <hr />
        <button type="button" className="gameMenuButton">
          <img className="bag" src={Bag} alt="Inventaire" />
        </button>
        <hr />
        <button type="button" className="gameMenuButton">
          <img className="noteBook" src={NoteBook} alt="Objectif" />
        </button>
      </nav>
      <button
        className="closeButton"
        type="button"
        onClick={toggleNavVisibility}
      >
        {isNavVisible ? "Fermer" : "Ouvrir"}
      </button>
    </>
  );
}

export default GameMenu;
