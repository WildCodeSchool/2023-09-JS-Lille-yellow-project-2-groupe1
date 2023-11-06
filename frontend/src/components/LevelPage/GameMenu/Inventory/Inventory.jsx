import { useState } from "react";
import "./Inventory.scss";

function Inventory() {
  const [showInventory, setShowInventory] = useState(false);

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
        <img className="bag" src="./src/assets/pictures/Bag.png" alt="Le sac" />
      </button>
      <article
        className={`inventoryPopUp ${
          showInventory ? "inventoryPopUp__show" : ""
        }`}
      >
        <section className="openBag">
          <img
            src="./src/assets/pictures/OpenBag.png"
            alt="Open Bag"
            className="insideBag"
          />
          <button
            type="button"
            className="inventoryPopUp__closeButton"
            onClick={handleInventoryToggle}
          >
            Fermé
          </button>
        </section>
      </article>
    </>
  );
}

export default Inventory;
