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
    description: PropTypes.string.isRequired,
  }).isRequired,
  img: PropTypes.string.isRequired,
  classtag: PropTypes.string.isRequired,
};

export default TargetButton;
