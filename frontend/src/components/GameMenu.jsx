import "./GameMenu.scss";
import React from "react";

function GameMenu() {
  return (
    <nav>
      <img
        src="./frontend/src/assets/jurassique.png"
        alt="un homme de cromagnon"
      />
      <hr />

      <button type="button">Objectifs</button>

      <hr />
      <button type="button">Inventaire</button>
    </nav>
  );
}

export default GameMenu;
