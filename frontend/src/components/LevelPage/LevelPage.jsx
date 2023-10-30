import { PropTypes } from "prop-types";
import TargetButton from "../TargetButton";
import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import JurassicTheme from "../../assets/pictures/JurassicTheme.png";
import TurnYourPhone from "../../assets/pictures/TurnYourPhone.jpg";

function LevelPage({ dino }) {
  return (
    <>
      <img
        className="TurnYourPhone"
        src={TurnYourPhone}
        alt="Tournes ton téléphone en paysage"
      />
      <main>
        <GameMenu />
        <TargetButton dino={dino} />
        <img
          className="JurassiqueTheme"
          src={JurassicTheme}
          alt="Des dinosaures dans un paysage du Crétacé"
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
      régime_alimentaire: PropTypes.string.isRequired,
      longueur: PropTypes.string.isRequired,
      poids: PropTypes.string.isRequired,
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
