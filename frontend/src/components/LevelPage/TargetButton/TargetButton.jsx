import React, { useState } from "react";
import "./TargetButton.scss";
import { PropTypes } from "prop-types";
import Brain from "../../../assets/pictures/ComponentsPics/Brain.png";

function TargetButton({ dino, img, imgClass, item, imgPopUpClass }) {
  const [popupMessage, setPopupMessage] = useState("");
  return (
    <>
      <button
        type="button"
        className="targetButton"
        aria-label={`L'image du ${dino.name}`}
        onClick={() =>
          setPopupMessage(
            <article className="message">
              <header className="popUpHeader">
                <img src={img} alt="" className={`${imgPopUpClass}`} />
                {item ? (
                  <button
                    type="button"
                    className={item.itemClassButton}
                    aria-label={`${item.itemName}`}
                  >
                    <img src={item.itemSrc} alt="" className={item.itemClass} />
                  </button>
                ) : (
                  ""
                )}
                <h2 className="name">{dino.name}</h2>
              </header>
              <main>
                <img src={Brain} alt="cerveau" className="brain" />
                <p className="info">{dino.description}</p>
              </main>
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
        <img src={img} className={`${imgClass}`} alt="" />
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
  imgClass: PropTypes.string.isRequired,
  item: PropTypes.shape({
    itemName: PropTypes.string,
    itemSrc: PropTypes.string,
    itemClass: PropTypes.string,
    itemClassButton: PropTypes.string,
  }).isRequired,
  imgPopUpClass: PropTypes.string.isRequired,
};

export default TargetButton;
