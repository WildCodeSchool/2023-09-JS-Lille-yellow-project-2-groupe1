import { useRouteLoaderData, Link } from "react-router-dom";
import "./ChooseLevelPage.scss";
import button from "../../assets/pictures/ChooseLevelPagePics/playButtonSP.png";
import TurnYourPhone from "../TurnYourPhone/TurnYourPhone";
import Timer from "../Timer/Timer";
import ReturnGameMenu from "../LevelPage/ReturnGameMenu/ReturnGameMenu";

function ChooseLevelPage() {
  const era = useRouteLoaderData("ChooseLevelPage");

  const levelPaths = {
    1: "/LevelPage",
    2: "/Rome",
    3: "/Egypt",
    4: "/MiddleAge",
    5: "/Modern",
  };

  return (
    <>
      <main className="cardEraContainer">
        {era.map((e) => (
          <article key={e.name} className={`card card${e.id}`}>
            <h2 className="titleEra">{e.name}</h2>
            <p className="cardEraContainer__levelDescription">
              {e.description}
            </p>
            <Link to={levelPaths[e.id]} className="playDevice">
              <img
                src={button}
                alt="Bouton jouer"
                className="cardEraContainer__playButton"
              />
            </Link>
          </article>
        ))}
        <Link
          to="/Launcher"
          className="closeButtonChooseLevelPage"
          aria-label="retourner au menu principal"
        >
          ↩
        </Link>
      </main>
      <TurnYourPhone />
      <Timer />
      <ReturnGameMenu />
    </>
  );
}

export default ChooseLevelPage;
