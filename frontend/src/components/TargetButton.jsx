import React, { useState } from "react";
import "./TargetButton.scss";
import { PropTypes } from "prop-types";
import Pterodactyle from "../assets/pictures/Pterodactyle.png";

function TargetButton({ dino }) {
  const [popupMessage, setPopupMessage] = useState("");
  const hello = dino.find((dinosaure) => dinosaure.id === 1);
  return (
    <>
      <button
        type="button"
        className="button"
        onClick={() =>
          setPopupMessage(
            <article className="message">
              <h1>{hello.name}</h1>
              <p>{hello.anecdote1}</p>
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

TargetButton.propTypes = {
  dino: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      régime_alimentaire: PropTypes.string.isRequired,
      longueur: PropTypes.string.isRequired,
      poids: PropTypes.string.isRequired,
      anecdote1: PropTypes.string.isRequired,
      anecdote2: PropTypes.string.isRequired,
      anecdote3: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      info1: PropTypes.string.isRequired,
      info2: PropTypes.string.isRequired,
      info3: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TargetButton;
