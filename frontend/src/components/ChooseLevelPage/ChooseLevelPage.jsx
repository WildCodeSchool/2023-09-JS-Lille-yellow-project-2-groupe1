import { Link } from "react-router-dom";
import "./ChooseLevelPage.scss";

function ChooseLevelPage() {
  const universe = [
    { name: "CRÉTACÉ", Id: 1 },
    { name: "ROMAIN", Id: 2 },
    { name: "EGYPTE", Id: 3 },
    { name: "MOYEN-AGE", Id: 4 },
    { name: "MODERNE", Id: 5 },
  ];
  return (
    <>
      <main className="cardContainer">
        {universe.map((world) => (
          <article key={world.name} className={`card card${world.Id}`}>
            <h2 className="titleEra">{world.name}</h2>
            <Link to="/LevelPage">
              <button type="button" className="cardContainer__playButton">
                Jouer
              </button>
            </Link>
          </article>
        ))}
      </main>
      <Link to="/">
        <button type="button" className="CloseButtonChooseLevelPage">
          ↩
        </button>
      </Link>
    </>
  );
}

export default ChooseLevelPage;
