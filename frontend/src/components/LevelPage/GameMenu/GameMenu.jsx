import "./GameMenu.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import JurassicCharacter from "../../../assets/pictures/jurassic/AvatarJurassic.png";
import Objectives from "./Objectives/Objectives";
import Inventory from "./Inventory/Inventory";

function GameMenu({ bag }) {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <nav className={isNavVisible ? "visible" : "hidden"}>
        <img className="jurassicCharacter" src={JurassicCharacter} alt="" />
        <hr />
        <Inventory bag={bag} />
        <hr />
        <Objectives />
      </nav>
      <button
        className={isNavVisible ? "closeNav" : "hiddenbutton"}
        type="button"
        aria-label="Boutton pour ouvrir ou fermer le menu"
        onClick={toggleNavVisibility}
      >
        {isNavVisible ? "❮" : "❯"}
      </button>
    </>
  );
}

GameMenu.propTypes = {
  bag: PropTypes.arrayOf(PropTypes.string),
};
GameMenu.defaultProps = {
  bag: [],
};
export default GameMenu;
