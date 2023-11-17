import "./Launcher.scss";
import { Link } from "react-router-dom";
import Viktor from "../../assets/pictures/ComponentsPics/Viktor.png";
import TimeMachine from "../../assets/pictures/ComponentsPics/TimeMachine.png";
import ViktorCharacter from "../../assets/pictures/ComponentsPics/ViktorCharacter.png";
import GameMenu from "../LevelPage/GameMenu/GameMenu";
import ReturnGameMenu from "../LevelPage/ReturnGameMenu/ReturnGameMenu";

function Launcher() {
  const characterClass = "viktorCharacter";
  return (
    <main className="backgroundlauncher">
      <GameMenu
        characterImg={ViktorCharacter}
        characterClass={characterClass}
      />
      <article className="articleLauncher">
        Clique sur la machine pour voyager !
      </article>
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
      <ReturnGameMenu />
    </main>
  );
}

export default Launcher;
