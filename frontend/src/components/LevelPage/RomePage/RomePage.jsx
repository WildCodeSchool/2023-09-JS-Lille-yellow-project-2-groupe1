import { useRouteLoaderData } from "react-router-dom";
import GameMenu from "../GameMenu/GameMenu";
import ReturnGameMenu from "../ReturnGameMenu/ReturnGameMenu";
import RomeTheme from "../../../assets/pictures/Rome/RomeTheme.png";
import TurnYourPhone from "../../TurnYourPhone/TurnYourPhone";
import TargetButtonRome from "./TargetButtonRome";
import JuliusCaesar from "../../../assets/pictures/Rome/JuliusCaesar.png";
import armor from "../../../assets/pictures/Rome/Armor.png";
import Vercingetorix from "../../../assets/pictures/Rome/Vercingetorix.png";

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
          data={vercingetorix.data}
          img={Vercingetorix}
          imgClasse={vercingetorix.imgClasse}
          imgPopUpClass={vercingetorix.imgPopUpClass}
        />

        <img
          className="romeTheme"
          src={RomeTheme}
          alt="des romains dans un paysage Romain."
          draggable="false"
        />
        <ReturnGameMenu />
      </main>
      <TurnYourPhone />
    </>
  );
}

export default RomePage;
