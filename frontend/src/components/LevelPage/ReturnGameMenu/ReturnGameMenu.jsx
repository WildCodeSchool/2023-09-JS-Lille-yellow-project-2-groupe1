import { Link } from "react-router-dom";
import { useState } from "react";
import "./ReturnGameMenu.scss";

function ReturnGameMenu() {
  const [popupMessage, setPopupMessage] = useState("");
  function HandleEvent() {
    setPopupMessage(
      <article className="messagePopUp">
        Voulez-vous vraiment revenir au Menu Principal ?
        <footer className="areYouSureButton">
          <Link to="/" className="backtoMainMenu">
            Oui
          </Link>
          <button
            type="button"
            className="backtoMainMenu"
            onKeyDown={() => setPopupMessage("")}
            onClick={() => setPopupMessage("")}
          >
            Non
          </button>
        </footer>
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
