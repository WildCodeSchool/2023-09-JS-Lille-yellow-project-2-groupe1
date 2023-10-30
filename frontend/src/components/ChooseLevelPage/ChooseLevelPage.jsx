import "./ChooseLevelPage.scss";
import cretaceous from "../../assets/pictures/Jurassique.png";
import egypte from "../../assets/pictures/Egypte.png";
import romain from "../../assets/pictures/Romain.png";
import moyenAge from "../../assets/pictures/Moyen-Age.png";
import moderne from "../../assets/pictures/Moderne.png";

function ChooseLevelPage() {
  const universe = [
    { name: "CRÉTACÉ", imgSrc: cretaceous, page: "./levelPage.jsx" },
    { name: "ROMAIN", imgSrc: romain },
    { name: "EGYPTE", imgSrc: egypte },
    { name: "MOYEN-AGE", imgSrc: moyenAge },
    { name: "MODERNE", imgSrc: moderne },
  ];
  return (
    <main className="cardContainer">
      {universe.map((monde) => (
        <article key={monde.name} className={`card card${monde.name}`}>
          <h2 className="titleEra">{monde.name}</h2>
          <button type="button" className="cardContainer__playButton">
            Jouer
          </button>
        </article>
      ))}
    </main>
  );
}

export default ChooseLevelPage;
