import React, { useState } from "react";
import "./TargetButton.scss";

function TargetButton() {
  const [popupMessage, setPopupMessage] = useState("");
  return (
    <>
      <button
        type="button"
        className="button"
        onClick={() =>
          setPopupMessage(
            <article className="message">
              Bienvenue a tous
              <button
                type="button"
                className="close"
                onClick={() => setPopupMessage("")}
              >
                close
              </button>
            </article>
          )
        }
      >
        clique ici
      </button>
      {popupMessage}
    </>
  );
}

export default TargetButton;
