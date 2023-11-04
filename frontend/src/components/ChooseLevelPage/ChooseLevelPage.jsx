import "./ChooseLevelPage.scss";
import button from "../../assets/pictures/playButtonSP.png";

function ChooseLevelPage() {
  const universe = [
    { name: "CRÉTACÉ", Id: 1 },
    { name: "ROMAIN", Id: 2 },
    { name: "EGYPTE", Id: 3 },
    { name: "MOYEN-AGE", Id: 4 },
    { name: "MODERNE", Id: 5 },
  ];
  return (
    <main className="cardContainer">
      {universe.map((world) => (
        <article key={world.name} className={`card card${world.Id}`}>
          <h2 className="titleEra">{world.name}</h2>
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
