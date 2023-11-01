import "./ChooseLevelPage.scss";
import button from "../../assets/pictures/playButtonSP.png";

function ChooseLevelPage() {
  const universe = [
    { name: "CRÉTACÉ" },
    { name: "ROMAIN" },
    { name: "EGYPTE" },
    { name: "MOYEN-AGE" },
    { name: "MODERNE" },
  ];
  return (
    <main className="cardContainer">
      {universe.map((monde) => (
        <article key={monde.name} className={`card card${monde.name}`}>
          <h2 className="titleEra">{monde.name}</h2>
          <p className="cardContainer__levelDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptates voluptatem porro voluptate similique rerum labore quos in
            atque, omnis molestiae totam, eius beatae at asperiores cumque
            soluta praesentium aliquid!
          </p>
          <button type="button">
            <img
              src={button}
              alt="Bouton jouer"
              className="cardContainer__playButton"
            />
          </button>
        </article>
      ))}
    </main>
  );
}

export default ChooseLevelPage;
