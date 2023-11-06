import { useState } from "react";
import "./Inventory.scss";

function Inventory() {
  const [showInventory, setShowInventory] = useState(false);

  const handleInventoryToggle = () => {
    setShowInventory(!showInventory);
  };

  return (
    <>
      <div>
        <button
          className="invButton"
          type="button"
          onClick={handleInventoryToggle}
        >
          <img
            className="bag"
            src="./src/assets/pictures/Bag.png"
            alt="The Bag"
          />
        </button>
      </div>
      <article
        className={`inventoryPopUp ${
          showInventory ? "inventoryPopUp__show" : ""
        }`}
      >
        <div className="openBag">
          <img
            src="./src/assets/pictures/OpenBag.png"
            alt="Open Bag"
            id="openBag"
          />
          <button
            type="button"
            className="inventoryPopUp__closeButton"
            onClick={handleInventoryToggle}
          >
            Close
          </button>
        </div>
      </article>
    </>
  );
}

export default Inventory;
