import { useRouteLoaderData, Link } from "react-router-dom";
import "./ChooseLevelPage.scss";
import button from "../../assets/pictures/playButtonSP.png";

function ChooseLevelPage() {
  const era = useRouteLoaderData("ChooseLevelPage");
  const universe = [
    { name: "CRÉTACÉ", id: 1 },
    { name: "ROMAIN", id: 2 },
    { name: "EGYPTE", id: 3 },
    { name: "MOYEN-AGE", id: 4 },
    { name: "MODERNE", id: 5 },
  ];
  return (
    <main className="cardEraContainer">
      {universe.map((world) => (
        <article key={world.name} className={`card card${world.id}`}>
          <h2 className="titleEra">{world.name}</h2>
          <p className="cardEraContainer__levelDescription">
            {era.description}
          </p>
          <Link to="/LevelPage">
            <button type="button" className="playDevice">
              <img
                src={button}
                alt="Bouton jouer"
                className="cardEraContainer__playButton"
              />
            </button>
          </Link>
        </article>
      ))}
      <Link to="/">
        <button type="button" className="closeButtonChooseLevelPage">
          ↩
        </button>
      </Link>
    </main>
  );
}

export default ChooseLevelPage;
