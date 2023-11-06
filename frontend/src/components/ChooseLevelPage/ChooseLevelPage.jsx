import "./ChooseLevelPage.scss";
import button from "../../assets/pictures/playButtonSP.png";

function ChooseLevelPage() {
  const universe = [
    { name: "CRÉTACÉ", id: 1 },
    { name: "ROMAIN", id: 2 },
    { name: "EGYPTE", id: 3 },
    { name: "MOYEN-AGE", id: 4 },
    { name: "MODERNE", id: 5 },
  ];
  return (
    <main className="cardContainer">
      {universe.map((world) => (
        <article key={world.name} className={`card card${world.id}`}>
          <h2 className="titleEra">{world.name}</h2>
          <p className="cardContainer__levelDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptates voluptatem porro voluptate similique rerum labore quos in
            atque, omnis molestiae totam, eius beatae at asperiores cumque
            soluta praesentium aliquid!
          </p>
          <button type="button" className="playDevice">
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
