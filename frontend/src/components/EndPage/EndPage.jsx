import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./EndPage.scss";
import shelf from "../../assets/pictures/ComponentsPics/shelf.png";
import sword from "../../assets/pictures/Modern/NapoleonSword.png";
import pen from "../../assets/pictures/Modern/HugoPen.png";
import necklace from "../../assets/pictures/Modern/Necklace.png";
import tooth from "../../assets/pictures/jurassic/tRexTooth.png";
import claw from "../../assets/pictures/jurassic/velociraptorclaw.png";
import egg from "../../assets/pictures/jurassic/quetzalcoatlusEgg.png";
import scepter from "../../assets/pictures/Egypt/scepter.png";
import tablet from "../../assets/pictures/Egypt/tablet.png";
import papyrus from "../../assets/pictures/Egypt/papyrus.png";
import chains from "../../assets/pictures/Rome/chains.png";
import armor from "../../assets/pictures/Rome/Armor.png";
import dagger from "../../assets/pictures/Rome/Dagger.png";
import pallet from "../../assets/pictures/MiddleAge/PaintPalette.png";
import excalibur from "../../assets/pictures/MiddleAge/Excalibur.png";
import crown from "../../assets/pictures/MiddleAge/CrownClovis.png";

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
        className={bag.includes("sword") ? "visibleSword" : "hiddenSword"}
        alt="épée de Napoléon"
      />
      <img
        src={pen}
        className={bag.includes("pen") ? "visiblePen" : "hiddenPen"}
        alt="Stylo de Victor Hugo"
      />
      <img
        src={necklace}
        className={
          bag.includes("necklace") ? "visibleNecklace" : "hiddenNecklace"
        }
        alt="Collier de Marie-Antoinette"
      />
      <img
        src={tooth}
        className={bag.includes("tooth") ? "visibleTooth" : "hiddenTooth"}
        alt="Dent de Tyranosaure"
      />
      <img
        src={claw}
        className={bag.includes("claw") ? "visibleClaw" : "hiddenClaw"}
        alt="Griffe de Vélociraptor"
      />
      <img
        src={egg}
        className={bag.includes("egg") ? "visibleEgg" : "hiddenEgg"}
        alt="Oeuf de Quetzalcoatlus"
      />
      <img
        src={scepter}
        className={bag.includes("scepter") ? "visibleScepter" : "hiddenScepter"}
        alt="Sceptre"
      />
      <img
        src={tablet}
        className={bag.includes("tablet") ? "visibleTablet" : "hiddenTablet"}
        alt="Tablette égyptienne"
      />
      <img
        src={papyrus}
        className={bag.includes("papyrus") ? "visiblePapyrus" : "hiddenPapyrus"}
        alt="Papyrus égyptien"
      />
      <img
        src={armor}
        className={bag.includes("armor") ? "visibleArmor" : "hiddenArmor"}
        alt="Sceptre"
      />
      <img
        src={chains}
        className={bag.includes("chains") ? "visibleChains" : "hiddenChains"}
        alt="Tablette égyptienne"
      />
      <img
        src={dagger}
        className={bag.includes("dagger") ? "visibleDagger" : "hiddenDagger"}
        alt="Papyrus égyptien"
      />
      <img
        src={pallet}
        className={
          bag.includes("paintPalette") ? "visiblePallet" : "hiddenPallet"
        }
        alt="La palette de peinture de Léonard De Vinci"
      />
      <img
        src={crown}
        className={bag.includes("crown") ? "visibleCrown" : "hiddenCrown"}
        alt="La couronne de Clovis"
      />
      <img
        src={excalibur}
        className={
          bag.includes("excalibur") ? "visibleExcalibur" : "hiddenExcalibur"
        }
        alt="Excalibur"
      />
      <img src={shelf} alt="étagère avec les artéfacts" className="shelf" />
      <Link to="/" className="restartgame" aria-label="recommencer le jeu">
        X
      </Link>
    </main>
  );
}

export default EndPage;
