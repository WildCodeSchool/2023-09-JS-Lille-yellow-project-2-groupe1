import { useRouteLoaderData } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import GameMenu from "../GameMenu/GameMenu";
import ReturnGameMenu from "../ReturnGameMenu/ReturnGameMenu";
import TurnYourPhone from "../../TurnYourPhone/TurnYourPhone";
import "../TargetButton/TargetButton.scss";
import "../TargetButton/TargetButtonRome.scss";
import TargetButton from "../TargetButton/TargetButton";
import JuliusCaesar from "../../../assets/pictures/Rome/JuliusCaesar.png";
import armor from "../../../assets/pictures/Rome/Armor.png";
import Vercingetorix from "../../../assets/pictures/Rome/Vercingetorix.png";
import Cicero from "../../../assets/pictures/Rome/Cicero.png";
import Brutus from "../../../assets/pictures/Rome/Brutus.png";
import dagger from "../../../assets/pictures/Rome/Dagger.png";
import Spartacus from "../../../assets/pictures/Rome/Spartacus.png";
import chains from "../../../assets/pictures/Rome/chains.png";
import Pompey from "../../../assets/pictures/Rome/Pompey.png";
import "./RomePage.scss";
import romeCharacter from "../../../assets/pictures/Rome/RomeCharacter.png";
import ReturnChooseLevelPageButton from "../ReturnChooseLevelPagebutton/ReturnChooseLevelPagebutton";
import Timer from "../../Timer/Timer";

function RomePage() {
  const characterClass = "romeCharacter";
  const { objectives, bag, setBag, score, setScore } = useGlobalContext();
  const romeArray = useRouteLoaderData("rome");
  function getRomeData(
    romeId,
    imgClass,
    imgPopUpClass,
    itemName = null,
    itemSrc = null,
    itemClass = null,
    itemClassButton = null
  ) {
    return {
      data: romeArray.find((rome) => rome.id === romeId),
      imgClass,
      item: { itemName, itemSrc, itemClass, itemClassButton },
      imgPopUpClass,
    };
  }
  let juliusCaesar;
  if (objectives.some((e) => e.item === "armor")) {
    juliusCaesar = getRomeData(
      1,
      "juliusCaesar",
      "juliusCaesarPopUp",
      "armor",
      armor,
      "armorClass",
      "armorClassButton"
    );
  } else {
    juliusCaesar = getRomeData(1, "juliusCaesar", "juliusCaesarPopUp");
  }
  const cicero = getRomeData(2, "cicero", "ciceroPopUp");
  let brutus;
  if (objectives.some((e) => e.item === "dagger")) {
    brutus = getRomeData(
      3,
      "brutus",
      "brutusPopUp",
      "dagger",
      dagger,
      "daggerClass",
      "daggerClassButton"
    );
  } else {
    brutus = getRomeData(3, "brutus", "brutusPopUp");
  }
  let spartacus;
  if (objectives.some((e) => e.item === "chains")) {
    spartacus = getRomeData(
      4,
      "spartacus",
      "spartacusPopUp",
      "chains",
      chains,
      "chainsClass",
      "chainsClassButton"
    );
  } else {
    spartacus = getRomeData(4, "spartacus", "spartacusPopUp");
  }
  const pompey = getRomeData(5, "pompey", "pompeyPopUp");
  const vercingetorix = getRomeData(6, "vercingetorix", "vercingetorixPopUp");
  return (
    <>
      <main className="romeTheme">
        <GameMenu
          bag={bag}
          characterImg={romeCharacter}
          characterClass={characterClass}
        />

        <TargetButton
          data={juliusCaesar.data}
          img={JuliusCaesar}
          imgClass={juliusCaesar.imgClass}
          item={juliusCaesar.item}
          imgPopUpClass={juliusCaesar.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={cicero.data}
          img={Cicero}
          imgClass={cicero.imgClass}
          item=""
          imgPopUpClass={cicero.imgPopUpClass}
          bag={bag}
          setBag={setBag}
        />
        <TargetButton
          data={brutus.data}
          img={Brutus}
          imgClass={brutus.imgClass}
          item={brutus.item}
          imgPopUpClass={brutus.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={spartacus.data}
          img={Spartacus}
          imgClass={spartacus.imgClass}
          item={spartacus.item}
          imgPopUpClass={spartacus.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={pompey.data}
          img={Pompey}
          imgClass={pompey.imgClass}
          item=""
          imgPopUpClass={pompey.imgPopUpClass}
          bag={bag}
          setBag={setBag}
        />
        <TargetButton
          data={vercingetorix.data}
          img={Vercingetorix}
          imgClass={vercingetorix.imgClass}
          item=""
          imgPopUpClass={vercingetorix.imgPopUpClass}
          bag={bag}
          setBag={setBag}
        />
        <ReturnGameMenu />
      </main>
      <TurnYourPhone />
      <Timer />
      <ReturnChooseLevelPageButton />
    </>
  );
}

export default RomePage;
