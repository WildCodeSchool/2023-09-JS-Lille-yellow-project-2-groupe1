import { useState } from "react";
import "./Inventory.scss";

function Inventory() {
  const [showInventory, setShowInventory] = useState(false);

  const handleInventoryToggle = () => {
    setShowInventory(!showInventory);
  };

  return (
    <>
      <button type="button" onClick={handleInventoryToggle}>
        Inventory
      </button>
      <article
        className={`inventoryPopUp ${
          showInventory ? "inventoryPopUp__show" : ""
        }`}
      >
        Ceci est l'inventaire
        <button
          type="button"
          className="inventoryPopUp__closeButton"
          onClick={handleInventoryToggle}
        >
          Close
        </button>
      </article>
    </>
  );
}

export default Inventory;
