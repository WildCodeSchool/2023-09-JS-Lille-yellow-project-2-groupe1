import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./EndPage.scss";

function EndPage() {
  const { score } = useGlobalContext();
  return (
    <main className="endPageContainer">
      {score === 0 && <h2>Tu n'as malheuresement pas récolté d'artéfact :(</h2>}
      {score < 8 && score !== 0 && (
        <h2>Bravo tu as récolté {score} / 8 artefacts</h2>
      )}
      {score === 8 && <h2>Félicitation ! Tu as récolté tout les artéfacts </h2>}
    </main>
  );
}

export default EndPage;
