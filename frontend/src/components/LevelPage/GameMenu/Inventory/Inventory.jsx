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
            <img
              src={egg}
              className="eggImgInBag"
              alt="L'oeuf"
              onMouseEnter={() =>
                setInfo(
                  <article className="eggPopUpInBag">
                    L'oeuf du quetzalcoatlus
                  </article>
                )
              }
              onMouseLeave={() => setInfo("")}
            />
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
