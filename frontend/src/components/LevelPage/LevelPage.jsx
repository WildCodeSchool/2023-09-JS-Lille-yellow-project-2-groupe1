import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import JurassiqueTheme from "../../assets/pictures/JurassiqueTheme.png";

function LevelPage() {
  return (
    <main>
      <GameMenu />
      <img
        className="JurassiqueTheme"
        src={JurassiqueTheme}
        alt="A lot of dinosaure in landscape"
      />
    </main>
  );
}

export default LevelPage;
