import { useState } from "react";
import "./Inventory.scss";
import Bag from "../../../../assets/pictures/ComponentsPics/Bag.png";

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
        <img className="bag" src={Bag} alt="Le sac" />
      </button>
      <article
        className={`inventoryPopUp ${
          showInventory ? "inventoryPopUp__show" : ""
        }`}
      >
        <section className="openBag">
          <button
            type="button"
            className="inventoryPopUp__closeButton"
            onClick={handleInventoryToggle}
          >
            X
          </button>
        </section>
      </article>
    </>
  );
}

export default Inventory;
