import "./GameMenu.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import Objectives from "./Objectives/Objectives";
import Inventory from "./Inventory/Inventory";

function GameMenu({ bag, characterImg, characterClass }) {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <nav className={isNavVisible ? "visible" : "hidden"}>
        <img className={`${characterClass}`} src={characterImg} alt="" />
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
  characterImg: PropTypes.string.isRequired,
  characterClass: PropTypes.string.isRequired,
};
GameMenu.defaultProps = {
  bag: [],
};
export default GameMenu;
