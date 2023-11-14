import { useState } from "react";
import "./Inventory.scss";
import PropTypes from "prop-types";
import Bag from "../../../../assets/pictures/ComponentsPics/Bag.png";
import egg from "../../../../assets/pictures/jurassic/quetzalcoatlusEgg.png";

function Inventory({ bag }) {
  const [showInventory, setShowInventory] = useState(false);
  const [info, setInfo] = useState("");
  const handleInventoryToggle = () => {
    setShowInventory(!showInventory);
  };

  const handleEnter = () => {
    setInfo(
      <article className="eggPopUpInBag">L'oeuf du quetzalcoatlus</article>
    );
  };

  const handleLeave = () => {
    setInfo("");
  };

  return (
    <>
      <button
        className="invButton"
        type="button"
        onClick={handleInventoryToggle}
      >
        <img className="bag" src={Bag} alt="Le sac" />
      </button>
      <article
        className={`inventoryPopUp ${
          showInventory ? "inventoryPopUp__show" : ""
        }`}
      >
        <button
          type="button"
          aria-label="Fermer la pop-up"
          className="inventoryPopUp__closeButton"
          onClick={handleInventoryToggle}
        >
          X
        </button>
        <main className="itemsContainer">
          {bag.find((e) => e === "egg") ? (
            <button
              key="eggButton"
              type="button"
              className="eggButton"
              onFocus={() => handleEnter()}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter()}
              onMouseLeave={handleLeave}
            >
              <img src={egg} className="eggImgInBag" alt="L'oeuf" />
            </button>
          ) : (
            ""
          )}
          {info}
        </main>
      </article>
    </>
  );
}

Inventory.propTypes = {
  bag: PropTypes.arrayOf(PropTypes.string),
};

Inventory.defaultProps = {
  bag: [],
};

export default Inventory;
