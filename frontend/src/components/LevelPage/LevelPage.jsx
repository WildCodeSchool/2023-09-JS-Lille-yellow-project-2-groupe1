import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import JurassicTheme from "../../assets/pictures/JurassicTheme.png";

function LevelPage() {
  return (
    <main>
      <GameMenu />
      <img
        className="JurassiqueTheme"
        src={JurassicTheme}
        alt="Des dinosaures dans un paysage du Crétacé"
      />
    </main>
  );
}

export default LevelPage;
