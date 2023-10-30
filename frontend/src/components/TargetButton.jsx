import React, { useState } from "react";
import "./TargetButton.scss";
import Pterodactyle from "../assets/pictures/Pterodactyle.png";

function TargetButton() {
  const [popupMessage, setPopupMessage] = useState("");
  function HandleEvent() {
    setPopupMessage(
      <article className="message">
        Ptérodactyle
        <button
          type="button"
          className="close"
          onKeyDown={() => setPopupMessage("")}
          onClick={() => setPopupMessage("")}
        >
          close
        </button>
      </article>
    );
  }
  return (
    <>
      <button type="button" onKeyDown={HandleEvent} onClick={HandleEvent}>
        <img src={Pterodactyle} alt="pterodactyle" className="Pterodactyle" />
      </button>
      {popupMessage}
    </>
  );
}

export default TargetButton;
