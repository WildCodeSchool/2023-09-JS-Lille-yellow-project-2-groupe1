import "./GameMenu.scss";
import React from "react";
import JurassicCharacter from "../../../assets/pictures/AvatarJurassic.png";
import Bag from "../../../assets/pictures/Bag.png";
import NoteBook from "../../../assets/pictures/NoteBook.png";

function GameMenu() {
  return (
    <nav>
      <img className="jurassiqueCharacter" src={JurassicCharacter} alt="" />
      <hr />
      <button type="button" className="gameMenuButton">
        <img className="bag" src={Bag} alt="Inventaire" />
      </button>
      <hr />
      <button type="button" className="gameMenuButton">
        <img className="noteBook" src={NoteBook} alt="Objectif" />
      </button>
    </nav>
  );
}

export default GameMenu;
