import { useState } from "react";
import PropTypes from "prop-types";
import "./Inventory.scss";
import Bag from "../../../../assets/pictures/ComponentsPics/Bag.png";
import egg from "../../../../assets/pictures/jurassic/quetzalcoatlusEgg.png";
import tooth from "../../../../assets/pictures/jurassic/tRexTooth.png";
import sword from "../../../../assets/pictures/Modern/NapoleonSword.png";
import pen from "../../../../assets/pictures/Modern/HugoPen.png";
import necklace from "../../../../assets/pictures/Modern/Necklace.png";
import claw from "../../../../assets/pictures/jurassic/velociraptorclaw.png";
import scepter from "../../../../assets/pictures/Egypt/scepter.png";
import papyrus from "../../../../assets/pictures/Egypt/papyrus.png";
import tablet from "../../../../assets/pictures/Egypt/tablet.png";
import chains from "../../../../assets/pictures/Rome/chains.png";
import armor from "../../../../assets/pictures/Rome/Armor.png";
import dagger from "../../../../assets/pictures/Rome/Dagger.png";

function Inventory({ bag }) {
  const [showInventory, setShowInventory] = useState(false);
  const [info, setInfo] = useState("");
  const handleInventoryToggle = () => {
    setShowInventory(!showInventory);
  };

  const handleEnter = (itemName) => {
    setInfo(<article className="PopUpInBag">{`${itemName}`}</article>);
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
        <header className="headerInventory">
          <h2 className="inventoryTitle">Sac</h2>
          <button
            type="button"
            aria-label="Fermer la pop-up"
            className="inventoryPopUp__closeButton"
            onClick={handleInventoryToggle}
          >
            X
          </button>
        </header>
        <main className="itemsContainer">
          {bag.find((e) => e === "egg") ? (
            <button
              key="eggButton"
              type="button"
              className="eggButton"
              onFocus={() => handleEnter("Oeuf de quetzalcoatlus")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("Oeuf de quetzalcoatlus")}
              onMouseLeave={handleLeave}
            >
              <img src={egg} className="eggImgInBag" alt="L'oeuf" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "tooth") ? (
            <button
              key="toothButton"
              type="button"
              className="toothButton"
              onFocus={() => handleEnter("Dent du T-Rex")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("Dent du T-Rex")}
              onMouseLeave={handleLeave}
            >
              <img src={tooth} className="toothImgInBag" alt="La dent" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "claw") ? (
            <button
              key="clawButton"
              type="button"
              className="clawButton"
              onFocus={() => handleEnter("La griffe du velociraptor")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("La griffe du velociraptor")}
              onMouseLeave={handleLeave}
            >
              <img src={claw} className="clawImgInBag" alt="La griffe" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "sword") ? (
            <button
              key="swordButton"
              type="button"
              className="swordButton"
              onFocus={() => handleEnter("Epée de Napoléon")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("Epée de Napoléon")}
              onMouseLeave={handleLeave}
            >
              <img src={sword} className="swordImgInBag" alt="L'épée" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "necklace") ? (
            <button
              key="necklaceButton"
              type="button"
              className="necklaceButton"
              onFocus={() => handleEnter("Collier de Marie-Antoinette")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("Collier de Marie-Antoinette")}
              onMouseLeave={handleLeave}
            >
              <img src={necklace} className="necklaceImgInBag" alt="Collier" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "pen") ? (
            <button
              key="penButton"
              type="button"
              className="penButton"
              onFocus={() => handleEnter("Stylo de Victor Hugo")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("Stylo de Victor Hugo")}
              onMouseLeave={handleLeave}
            >
              <img src={pen} className="penImgInBag" alt="Stylo" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "scepter") ? (
            <button
              key="scepterButton"
              type="button"
              className="scepterButton"
              onFocus={() => handleEnter("Le sceptre de Toutankhamon")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("Le sceptre de Toutankhamon")}
              onMouseLeave={handleLeave}
            >
              <img src={scepter} className="scepterImgInBag" alt="Le sceptre" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "papyrus") ? (
            <button
              key="papyrusButton"
              type="button"
              className="papyrusButton"
              onFocus={() => handleEnter("Le papyrus d'Annubis")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("Le papyrus d'Annubis")}
              onMouseLeave={handleLeave}
            >
              <img src={papyrus} className="papyrusImgInBag" alt="Le papyrus" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "tablet") ? (
            <button
              key="tabletButton"
              type="button"
              className="tabletButton"
              onFocus={() => handleEnter("La tablette de hieroglyphe d'Isis")}
              onBlur={handleLeave}
              onMouseEnter={() =>
                handleEnter("La tablette de hieroglyphe d'Isis")
              }
              onMouseLeave={handleLeave}
            >
              <img src={tablet} className="papyrusImgInBag" alt="La tablette" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "armor") ? (
            <button
              key="armorButton"
              type="button"
              className="armorButton"
              onFocus={() => handleEnter("L'armure d'un soldat romain")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("L'armure d'un soldat romain")}
              onMouseLeave={handleLeave}
            >
              <img src={armor} className="armorImgInBag" alt="L'armure" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "chains") ? (
            <button
              key="chainsButton"
              type="button"
              className="chainsButton"
              onFocus={() =>
                handleEnter("Les chaines d'esclavage de Spartacus")
              }
              onBlur={handleLeave}
              onMouseEnter={() =>
                handleEnter("Les chaines d'esclavage de Spartacus")
              }
              onMouseLeave={handleLeave}
            >
              <img
                src={chains}
                className="chainsImgInBag"
                alt="Les chaines de Spartacus"
              />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "dagger") ? (
            <button
              key="daggerButton"
              type="button"
              className="daggerButton"
              onFocus={() => handleEnter("La dague du meutre de Jules César")}
              onBlur={handleLeave}
              onMouseEnter={() =>
                handleEnter("La dague du meutre de Jules César")
              }
              onMouseLeave={handleLeave}
            >
              <img src={dagger} className="daggerImgInBag" alt="La dague" />
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
