import { useRouteLoaderData } from "react-router-dom";
import GameMenu from "../GameMenu/GameMenu";
import ReturnGameMenu from "../ReturnGameMenu/ReturnGameMenu";
import TurnYourPhone from "../../TurnYourPhone/TurnYourPhone";
import TargetButtonRome from "../TargetButton/TargetButton";
// import "./TargetButton/TargetButton.scss";
// import "./TargetButton/TargetButtonRome.scss";
import JuliusCaesar from "../../../assets/pictures/Rome/JuliusCaesar.png";
import armor from "../../../assets/pictures/Rome/Armor.png";
import Vercingetorix from "../../../assets/pictures/Rome/Vercingetorix.png";
import Cicero from "../../../assets/pictures/Rome/Cicero.png";
import Auguste from "../../../assets/pictures/Rome/Auguste.png";
import dagger from "../../../assets/pictures/Rome/Dagger.png";
import Spartacus from "../../../assets/pictures/Rome/Spartacus.png";
import ironFetters from "../../../assets/pictures/Rome/IronFetters.png";
import Pompey from "../../../assets/pictures/Rome/Pompey.png";
import "./RomePage.scss";

function RomePage() {
  const romeArray = useRouteLoaderData("romePage");
  function getRomeData(
    romeId,
    imgClasse,
    imgPopUpClass,
    itemName = null,
    itemSrc = null,
    itemClass = null,
    itemClassButton = null
  ) {
    return {
      data: romeArray.find((rome) => rome.id === romeId),
      imgClasse,
      item: { itemName, itemSrc, itemClass, itemClassButton },
      imgPopUpClass,
    };
  }
  const juliusCaesar = getRomeData(
    1,
    "julesCésar",
    "Armure de soldat romain",
    armor,
    "armorClass",
    "armorClassButton"
  );
  const cicero = getRomeData(2, "cicéron", "ciceronPopUp");
  const auguste = getRomeData(
    3,
    "auguste",
    "Dague qui a servi a assassiner Jules César",
    dagger,
    "daggerClass",
    "dagerClassButton"
  );
  const spartacus = getRomeData(
    4,
    "spartacus",
    "Gladiateur et chef d'une révolte d'esclaves, il a mené la Troisième Guerre servile contre la République romaine.",
    ironFetters,
    "ironFettersClass",
    "ironFettersClassButton"
  );
  const pompey = getRomeData(5, "pompée", "pompéePopUp");
  const vercingetorix = getRomeData(6, "vercingétorix", "vercingétorixPopUp");
  return (
    <>
      <main className="romeTheme">
        <GameMenu />

        <TargetButtonRome
          data={juliusCaesar.data}
          img={JuliusCaesar}
          imgClasse={juliusCaesar.imgClasse}
          item={juliusCaesar.item}
          imgPopUpClass={juliusCaesar.imgPopUpClass}
        />
        <TargetButtonRome
          data={cicero.data}
          img={Cicero}
          imgClasse={cicero.imgClasse}
          item={cicero.item}
          imgPopUpClass={cicero.imgPopUpClass}
        />
        <TargetButtonRome
          data={auguste.data}
          img={Auguste}
          imgClasse={auguste.imgClasse}
          item={auguste.item}
          imgPopUpClass={auguste.imgPopUpClass}
        />
        <TargetButtonRome
          data={spartacus.data}
          img={Spartacus}
          imgClasse={spartacus.imgClasse}
          imgPopUpClass={spartacus.imgPopUpClass}
        />
        <TargetButtonRome
          data={pompey.data}
          img={Pompey}
          imgClasse={pompey.imgClasse}
          imgPopUpClass={pompey.imgPopUpClass}
        />
        <TargetButtonRome
          data={vercingetorix.data}
          img={Vercingetorix}
          imgClasse={vercingetorix.imgClasse}
          imgPopUpClass={vercingetorix.imgPopUpClass}
        />
        <ReturnGameMenu />
      </main>
      <TurnYourPhone />
    </>
  );
}

export default RomePage;
