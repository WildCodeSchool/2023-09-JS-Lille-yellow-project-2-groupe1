import "./ChooseLevelPage.scss";

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
          <button type="button" className="cardContainer__playButton">
            Jouer
          </button>
        </article>
      ))}
    </main>
  );
}

export default ChooseLevelPage;
