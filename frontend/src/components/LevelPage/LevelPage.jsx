import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import ReturnGameMenu from "./ReturnGameMenu/ReturnGameMenu";
import JurassicTheme from "../../assets/pictures/jurassic/JurassicTheme.png";
import TurnYourPhone from "../../assets/pictures/TurnYourPhone.jpg";
import TargetButton from "./TargetButton/TargetButton";

function LevelPage() {
  return (
    <>
      <img
        className="turnYourPhone"
        src={TurnYourPhone}
        alt="Tournes ton téléphone en paysage"
      />
      <main>
        <GameMenu />
        <TargetButton />
        <img
          className="jurassicTheme"
          src={JurassicTheme}
          alt="Des dinosaures dans un paysage du Crétacé"
        />
        <ReturnGameMenu />
      </main>
    </>
  );
}

export default LevelPage;
