import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import ReturnGameMenu from "./ReturnGameMenu/ReturnGameMenu";
import JurassicTheme from "../../assets/pictures/JurassicTheme.png";
import TargetButton from "../TargetButton";
import TurnYourPhone from "../TurnYourPhone/TurnYourPhone";

function LevelPage() {
  return (
    <>
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
      <TurnYourPhone />
    </>
  );
}

export default LevelPage;
