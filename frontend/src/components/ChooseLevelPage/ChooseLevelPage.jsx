import { useRouteLoaderData, Link } from "react-router-dom";
import "./ChooseLevelPage.scss";
import button from "../../assets/pictures/ChooseLevelPagePics/playButtonSP.png";
import TurnYourPhone from "../TurnYourPhone/TurnYourPhone";

function ChooseLevelPage() {
  const era = useRouteLoaderData("ChooseLevelPage");

  const universe = [
    { name: "CRÉTACÉ", id: 1 },
    { name: "ROMAIN", id: 2 },
    { name: "EGYPTE", id: 3 },
    { name: "MOYEN-AGE", id: 4 },
    { name: "MODERNE", id: 5 },
  ];

  const levelPaths = {
    1: "/LevelPage",
    2: "/LevelPageRomain",
    3: "/Egypt",
    4: "/LevelPageMoyenAge",
    5: "/Modern",
  };

  return (
    <>
      <main className="cardEraContainer">
        {universe.map((world) => (
          <article key={world.name} className={`card card${world.id}`}>
            <h2 className="titleEra">{world.name}</h2>
            <p className="cardEraContainer__levelDescription">
              {era.description}
            </p>
            <Link to={levelPaths[world.id]} className="playDevice">
              <img
                src={button}
                alt="Bouton jouer"
                className="cardEraContainer__playButton"
              />
            </Link>
          </article>
        ))}
        <Link
          to="/"
          className="closeButtonChooseLevelPage"
          aria-label="retourner au menu principal"
        >
          ↩
        </Link>
      </main>
      <TurnYourPhone />
    </>
  );
}

export default ChooseLevelPage;
