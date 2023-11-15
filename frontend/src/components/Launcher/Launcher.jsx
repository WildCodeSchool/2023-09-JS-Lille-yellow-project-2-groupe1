import "./Launcher.scss";
import { Link } from "react-router-dom";
import Viktor from "../../assets/pictures/ComponentsPics/Viktor.png";
import TimeMachine from "../../assets/pictures/ComponentsPics/TimeMachine.png";
import GameMenu from "../LevelPage/GameMenu/GameMenu";

function Launcher() {
  const characterClass = "viktorCharacter";
  return (
    <main className="backgroundlauncher">
      <GameMenu characterImg={Viktor} characterClass={characterClass} />
      <img
        src={Viktor}
        alt="Viktor le personnage principal"
        className="viktor"
      />
      <Link to="/ChooseLevelPage" className="playDevice">
        <img
          src={TimeMachine}
          alt="Machine temporelle Steampunk"
          className="timeMachine"
        />
      </Link>
    </main>
  );
}

export default Launcher;
