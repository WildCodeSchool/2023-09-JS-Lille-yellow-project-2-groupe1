import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import JurassicTheme from "../../assets/pictures/JurassicTheme.png";
import TurnYourPhone from "../../assets/pictures/TurnYourPhone.jpg";
import TargetButton from "../TargetButton";

function LevelPage() {
  return (
    <>
      <img
        className="TurnYourPhone"
        src={TurnYourPhone}
        alt="Tournes ton téléphone en paysage"
      />
      <main>
        <GameMenu />
        <TargetButton />
        <img
          className="JurassiqueTheme"
          src={JurassicTheme}
          alt="Des dinosaures dans un paysage du Crétacé"
        />
      </main>
    </>
  );
}

export default LevelPage;
