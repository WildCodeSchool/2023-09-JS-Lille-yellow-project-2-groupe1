import { Link } from "react-router-dom";
import { useState } from "react";
import "./ReturnGameMenu.scss";

function ReturnGameMenu() {
  const [popupMessage, setPopupMessage] = useState("");
  function HandleEvent() {
    setPopupMessage(
      <article className="message">
        Voulez-vous vraiment revenir au Menu Principal ?
        <div className="areYouSureButton">
          <Link to="/">
            <button type="button" className="backtoMainMenu">
              Oui
            </button>
          </Link>
          <button
            type="button"
            className="backtoMainMenu"
            onKeyDown={() => setPopupMessage("")}
            onClick={() => setPopupMessage("")}
          >
            Non
          </button>
        </div>
      </article>
    );
  }
  return (
    <>
      <button
        type="button"
        className="backMainMenuButton"
        onKeyDown={HandleEvent}
        onClick={HandleEvent}
        aria-label="Fermer la page de jeu"
      >
        X
      </button>
      {popupMessage}
    </>
  );
}

export default ReturnGameMenu;
