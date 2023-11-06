import React, { useState } from "react";
import "./TargetButton.scss";
import { PropTypes } from "prop-types";

function TargetButton({ dino, img, classtag }) {
  const [popupMessage, setPopupMessage] = useState("");

  return (
    <>
      <button
        type="button"
        className="targetButton"
        onClick={() =>
          setPopupMessage(
            <article className="message">
              <h1>{dino.name}</h1>
              <p>{dino.description}</p>
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
        <img src={img} className={`${classtag}`} alt="" />
      </button>
      {popupMessage}
    </>
  );
}

TargetButton.propTypes = {
  dino: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    diet: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    anecdote1: PropTypes.string.isRequired,
    anecdote2: PropTypes.string.isRequired,
    anecdote3: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    info1: PropTypes.string.isRequired,
    info2: PropTypes.string.isRequired,
    info3: PropTypes.string.isRequired,
  }),
  img: PropTypes.string.isRequired,
  classtag: PropTypes.string.isRequired,
};

TargetButton.defaultProps = {
  dino: {
    id: 0,
    name: "Dino Name",
    diet: "Unknown",
    length: "Unknown",
    weight: "Unknown",
    anecdote1: "No information available",
    anecdote2: "No information available",
    anecdote3: "No information available",
    description: "No information available",
    info1: "No information available",
    info2: "No information available",
    info3: "No information available",
  },
};

export default TargetButton;
