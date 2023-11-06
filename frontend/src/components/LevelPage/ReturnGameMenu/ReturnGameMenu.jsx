import { Link } from "react-router-dom";
import { useState } from "react";
import "./ReturnGameMenu.scss";

function ReturnGameMenu() {
  const [popupMessage, setPopupMessage] = useState("");
  function HandleEvent() {
    setPopupMessage(
      <article className="message">
        Voulez-vous vraiment revenir au Menu Principal ?
        <div className="AreYouSureButton">
          <Link to="/">
            <button type="button" className="BacktoMainMenu">
              Oui
            </button>
          </Link>
          <button
            type="button"
            className="BacktoMainMenu"
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
        className="BackMainMenuButton"
        onKeyDown={HandleEvent}
        onClick={HandleEvent}
      >
        X
      </button>
      {popupMessage}
    </>
  );
}

export default ReturnGameMenu;
