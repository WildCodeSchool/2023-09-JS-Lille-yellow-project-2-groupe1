import "./GameMenu.scss";
import React from "react";
import JurassicCharacter from "../../../assets/pictures/AvatarJurassique.png";
import Bag from "../../../assets/pictures/Bag.png";
import NoteBook from "../../../assets/pictures/NoteBook.png";

function GameMenu() {
  return (
    <nav>
      <img
        className="JurassiqueCharacter"
        src={JurassicCharacter}
        alt="Our main character"
      />
      <hr />
      <button type="button" className="GameMenuButton">
        <img className="Bag" src={Bag} alt="a bagpack" />
      </button>
      <hr />
      <button type="button" className="GameMenuButton">
        <img className="NoteBook" src={NoteBook} alt="a notebook" />
      </button>
    </nav>
  );
}

export default GameMenu;
