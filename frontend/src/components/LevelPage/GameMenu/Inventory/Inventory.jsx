import { useState } from "react";
import "./Inventory.scss";

function Inventory() {
  const [inventory, setInventory] = useState("");
  return (
    <>
      <button
        type="button"
        onClick={() =>
          setInventory(
            <article className="inventoryPopUp">
              Ceci est l'inventaire{" "}
              <button
                type="button"
                className="inventoryPopUp__closeButton"
                onClick={() => {
                  setInventory("");
                }}
              >
                Close
              </button>
            </article>
          )
        }
      >
        Inventory
      </button>
      {inventory}
    </>
  );
}

export default Inventory;
