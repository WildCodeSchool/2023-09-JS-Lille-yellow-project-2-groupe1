import "./ChooseLevelPage.scss";
import jurassique from "../../assets/pictures/Jurassique.png";
import egypte from "../../assets/pictures/Egypte.png";
import romain from "../../assets/pictures/Romain.png";
import moyenAge from "../../assets/pictures/Moyen-Age.png";
import moderne from "../../assets/pictures/Moderne.png";

function ChooseLevelPage() {
  const universe = [
    { name: "CRÉTACÉ", imgSrc: jurassique, page: "./levelPage.jsx" },
    { name: "ROMAIN", imgSrc: romain },
    { name: "EGYPTE", imgSrc: egypte },
    { name: "MOYEN-AGE", imgSrc: moyenAge },
    { name: "MODERNE", imgSrc: moderne },
  ];
  return (
    <div>
      <ul>
        {universe.map((monde) => (
          <li key={monde.name}>
            <article
              className="card"
              style={{
                backgroundImage: `url(${monde.imgSrc})`,
              }}
            >
              <h2 className="titleEra">{monde.name}</h2>
              <button type="button">Jouer</button>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseLevelPage;
