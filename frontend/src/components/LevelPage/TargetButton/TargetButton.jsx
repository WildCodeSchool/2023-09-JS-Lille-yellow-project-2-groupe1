import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TargetButton.scss";
import "./TargetButtonJurassic.scss";
import "./TargetButtonEgypt.scss";
import "./TargetButtonRome.scss";

import { PropTypes } from "prop-types";
import Brain from "../../../assets/pictures/ComponentsPics/Brain.png";
import { useGlobalContext } from "../../Context/GlobalContextProvider";

function TargetButton({
  data,
  img,
  imgClass,
  item,
  imgPopUpClass,
  bag,
  setBag,
  score,
  setScore,
}) {
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();
  const { time } = useGlobalContext();

  useEffect(() => {
    if (score === 8 || time === 0) {
      navigate("/end");
    }
  }, [score === 8, time === 0]);

  return (
    <>
      <button
        type="button"
        className="targetButton"
        aria-label={`L'image du ${data.name}`}
        onClick={() =>
          setPopupMessage(
            <article className="message">
              <header className="popUpHeader">
                <img src={img} alt="" className={`${imgPopUpClass}`} />
                {item.itemName ? (
                  <button
                    type="button"
                    className={item.itemClassButton}
                    aria-label={`L'objet du ${data.name}`}
                    onClick={() => {
                      setPopupMessage("");
                      setBag([...bag, `${item.itemName}`]);
                      setScore(score + 1);
                    }}
                  >
                    <img src={item.itemSrc} alt="" className={item.itemClass} />
                  </button>
                ) : (
                  ""
                )}
                <h2 className="name">{data.name}</h2>
              </header>
              <main>
                <img src={Brain} alt="cerveau" className="brain" />
                <p className="info">{data.description}</p>
              </main>
              <button
                type="button"
                aria-label="Boutton pour fermer la pop-up"
                className="close"
                onClick={() => setPopupMessage("")}
              >
                X
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
  data: PropTypes.shape({
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
  }),
  imgPopUpClass: PropTypes.string.isRequired,
  bag: PropTypes.arrayOf(PropTypes.string),
  setBag: PropTypes.func,
  score: PropTypes.number,
  setScore: PropTypes.func,
};

TargetButton.defaultProps = {
  item: {
    itemName: null,
  },
  bag: [],
  setBag: null,
  score: 0,
  setScore: null,
};
export default TargetButton;
