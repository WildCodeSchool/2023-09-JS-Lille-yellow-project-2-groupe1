import { PropTypes } from "prop-types";
import TargetButton from "../TargetButton";
import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import JurassicTheme from "../../assets/pictures/JurassicTheme.png";
import TurnYourPhone from "../../assets/pictures/TurnYourPhone.jpg";
import Pterodactyle from "../../assets/pictures/Pterodactyle.png";
import tRex from "../../assets/pictures/t-rex.svg";

function LevelPage({ dino }) {
  const pterodactyle = {
    data: dino.find((dinosaure) => dinosaure.id === 6),
    class: "pterodactyle",
  };
  const trex = {
    data: dino.find((dinosaure) => dinosaure.id === 1),
    class: "t-rex",
  };

  return (
    <>
      <img
        className="TurnYourPhone"
        src={TurnYourPhone}
        alt="Tournes ton téléphone en paysage"
      />
      <main>
        <GameMenu />

        <TargetButton
          dino={pterodactyle.data}
          img={Pterodactyle}
          classtag={pterodactyle.class}
        />
        <TargetButton dino={trex.data} img={tRex} classtag={trex.class} />

        <img
          className="JurassiqueTheme"
          src={JurassicTheme}
          alt="Des dinosaures dans un paysage du Crétacé"
          draggable="false"
        />
      </main>
    </>
  );
}
LevelPage.propTypes = {
  dino: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      diet: PropTypes.string.isRequired,
      length: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
      anecdote1: PropTypes.string.isRequired,
      anecdote2: PropTypes.string.isRequired,
      anecdote3: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      info1: PropTypes.string.isRequired,
      info2: PropTypes.string.isRequired,
      info3: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LevelPage;
