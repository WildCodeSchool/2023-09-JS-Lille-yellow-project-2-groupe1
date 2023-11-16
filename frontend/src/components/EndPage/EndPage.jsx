import { useGlobalContext } from "../Context/GlobalContextProvider";
import shelf2 from "../../assets/pictures/ComponentsPics/shelf2.png";
import sword from "../../assets/pictures/Modern/NapoleonSword.png";
import pen from "../../assets/pictures/Modern/HugoPen.png";
import necklace from "../../assets/pictures/Modern/Necklace.png";
import tooth from "../../assets/pictures/jurassic/tRexTooth.png";
import claw from "../../assets/pictures/jurassic/velociraptorclaw.png";
import egg from "../../assets/pictures/jurassic/quetzalcoatlusEgg.png";
import scepter from "../../assets/pictures/Egypt/scepter.png";
import tablet from "../../assets/pictures/Egypt/tablet.png";
import papyrus from "../../assets/pictures/Egypt/papyrus.png";
import ReturnGameMenu from "../LevelPage/ReturnGameMenu/ReturnGameMenu";
import "./EndPage.scss";

function EndPage() {
  const { score, bag } = useGlobalContext();
  return (
    <main className="endPageContainer">
      <article className="endarticle">
        {score === 0 && (
          <h2>Tu n'as malheureusement pas récolté d'artéfact :(</h2>
        )}
        {score < 8 && score !== 0 && (
          <h2>Bravo tu as récolté {score} / 8 artefacts</h2>
        )}
        {score === 8 && (
          <h2>Félicitation ! Tu as récolté tous les artéfacts </h2>
        )}
      </article>
      <img
        src={sword}
        className={bag ? "visibleSword" : "hiddenSword"}
        alt="épée de Napoléon"
      />
      <img
        src={pen}
        className={bag ? "visiblePen" : "hiddenPen"}
        alt="Stylo de Victor Hugo"
      />
      <img
        src={necklace}
        className={bag ? "visibleNecklace" : "hiddenNecklace"}
        alt="Collier de Marie-Antoinette"
      />
      <img
        src={tooth}
        className={bag ? "visibleTooth" : "hiddenTooth"}
        alt="Dent de Tyranosaure"
      />
      <img
        src={claw}
        className={bag ? "visibleClaw" : "hiddenClaw"}
        alt="Griffe de Vélociraptor"
      />
      <img
        src={egg}
        className={bag ? "visibleEgg" : "hiddenEgg"}
        alt="Oeuf de Quetzalcoatlus"
      />
      <img
        src={scepter}
        className={bag ? "visibleScepter" : "hiddenScepter"}
        alt="Sceptre"
      />
      <img
        src={tablet}
        className={bag ? "visibleTablet" : "hiddenTablet"}
        alt="Tablette égyptienne"
      />
      <img
        src={papyrus}
        className={bag ? "visiblePapyrus" : "hiddenPapyrus"}
        alt="Papyrus égyptien"
      />
      <img src={shelf2} alt="étagère avec les artéfacts" className="shelf" />
      <ReturnGameMenu />
    </main>
  );
}

export default EndPage;
