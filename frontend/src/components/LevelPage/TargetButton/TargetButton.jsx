import React, { useState } from "react";

import Pterodactyle from "../../../assets/pictures/jurassic/Pterodactyle.png";
import Brain from "../../../assets/pictures/Brain.png";
import Egg from "../../../assets/pictures/jurassic/Pterodactyle-egg.png";

import "./TargetButton.scss";

function TargetButton() {
  const [popupMessage, setPopupMessage] = useState("");
  function HandleEvent() {
    setPopupMessage(
      <article className="popPtero">
        <img src={Pterodactyle} alt="Pterodactyle" className="ptero" />

        <h1 className="name">Ptérodactyle</h1>
        <img src={Brain} alt="cerveau" className="brain" />
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem
          voluptatibus magnam quo, maxime quod illo, reprehenderit quasi quas,
          repudiandae amet aspernatur modi magni minus voluptatem rerum dolores
          iste! Officia.
        </p>
        <button
          type="button"
          className="close"
          onKeyDown={() => setPopupMessage("")}
          onClick={() => setPopupMessage("")}
        >
          close
        </button>
        <button
          type="button"
          onKeyDown={HandleEvent}
          onClick={HandleEvent}
          className="buttonEgg"
        >
          <img src={Egg} alt="oeuf" className="pteroEgg" />
        </button>
      </article>
    );
  }
  return (
    <>
      <button
        type="button"
        onKeyDown={HandleEvent}
        onClick={HandleEvent}
        className="buttonPtetodactyle"
      >
        <img src={Pterodactyle} alt="pterodactyle" className="pterodactyle" />
      </button>
      {popupMessage}
    </>
  );
}

export default TargetButton;
