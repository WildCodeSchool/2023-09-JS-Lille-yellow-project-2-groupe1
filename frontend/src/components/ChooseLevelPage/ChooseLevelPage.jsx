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
      {universe.map((world) => (
        <article key={world.name} className={`card card${world.name}`}>
          <h2 className="titleEra">{world.name}</h2>
          <button type="button" className="cardContainer__playButton">
            Jouer
          </button>
        </article>
      ))}
    </main>
  );
}

export default ChooseLevelPage;
