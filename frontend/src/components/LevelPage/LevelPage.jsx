import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import JurassicTheme from "../../assets/pictures/JurassicTheme.png";
import ReturnGameMenu from "./ReturnGameMenu/ReturnGameMenu";

function LevelPage() {
  return (
    <main>
      <GameMenu />
      <img
        className="jurassiqueTheme"
        src={JurassicTheme}
        alt="Des dinosaures dans un paysage du Crétacé"
      />
      <ReturnGameMenu />
    </main>
  );
}

export default LevelPage;
