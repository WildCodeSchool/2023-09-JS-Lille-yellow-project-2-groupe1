import { useRouteLoaderData } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import GameMenu from "../GameMenu/GameMenu";
import "./MiddleAge.scss";
import ReturnGameMenu from "../ReturnGameMenu/ReturnGameMenu";
import TurnYourPhone from "../../TurnYourPhone/TurnYourPhone";
import TargetButton from "../TargetButton/TargetButton";
import Clovis from "../../../assets/pictures/MiddleAge/Clovis.png";
import Charlemagne from "../../../assets/pictures/MiddleAge/Charlemagne.png";
import François1er from "../../../assets/pictures/MiddleAge/François1er.png";
import LeonardoDaVinci from "../../../assets/pictures/MiddleAge/LeonardoDaVinci.png";
import ArthurPendragon from "../../../assets/pictures/MiddleAge/ArthurPendragon.png";
import Excalibur from "../../../assets/pictures/MiddleAge/Excalibur.png";
import CrownClovis from "../../../assets/pictures/MiddleAge/CrownClovis.png";
import PaintPalette from "../../../assets/pictures/MiddleAge/PaintPalette.png";
import MiddleAgeCharacter from "../../../assets/pictures/MiddleAge/MiddleAgeCharacter.png";
import ReturnChooseLevelPageButton from "../ReturnChooseLevelPagebutton/ReturnChooseLevelPagebutton";

function MiddleAge() {
  const characterClass = "middleAgeCharacter";
  const { objectives, bag, setBag, score, setScore } = useGlobalContext();
  const middleAgeArray = useRouteLoaderData("middleAge");
  function getMiddleAgeData(
    middleAgeId,
    imgClass,
    imgPopUpClass,
    itemName = null,
    itemSrc = null,
    itemClass = null,
    itemClassButton = null
  ) {
    return {
      data: middleAgeArray.find((middleAge) => middleAge.id === middleAgeId),
      imgClass,
      item: { itemName, itemSrc, itemClass, itemClassButton },
      imgPopUpClass,
    };
  }
  let clovis;
  if (objectives.some((e) => e.item === "crown")) {
    clovis = getMiddleAgeData(
      4,
      "clovis",
      "clovisPopUp",
      "crown",
      CrownClovis,
      "crownClovisClass",
      "crownClovisClassButton"
    );
  } else {
    clovis = getMiddleAgeData(4, "clovis", "clovisPopUp");
  }

  const charlemagne = getMiddleAgeData(1, "charlemagne", "charlemagnePopUp");
  const françois1er = getMiddleAgeData(2, "françois1er", "françois1erPopUp");

  let leonardoDaVinci;
  if (objectives.some((e) => e.item === "paintPalette")) {
    leonardoDaVinci = getMiddleAgeData(
      5,
      "leonardoDaVinci",
      "leonardoDaVinciPopUp",
      "paintPalette",
      PaintPalette,
      "paintPaletteClass",
      "paintPaletteClassButton"
    );
  } else {
    leonardoDaVinci = getMiddleAgeData(
      5,
      "leonardoDaVinci",
      "leonardoDaVinciPopUp"
    );
  }

  let arthurPendragon;
  if (objectives.some((e) => e.item === "excalibur")) {
    arthurPendragon = getMiddleAgeData(
      3,
      "arthurPendragon",
      "arthurPendragonPopUp",
      "excalibur",
      Excalibur,
      "arthurPendragonClass",
      "arthurPendragonClassButton"
    );
  } else {
    arthurPendragon = getMiddleAgeData(
      3,
      "arthurPendragon",
      "arthurPendragonPopUp"
    );
  }

  return (
    <>
      <main className="middleAgeTheme">
        <GameMenu
          bag={bag}
          characterImg={MiddleAgeCharacter}
          characterClass={characterClass}
        />
        <TargetButton
          data={clovis.data}
          img={Clovis}
          imgClass={clovis.imgClass}
          item={clovis.item}
          imgPopUpClass={clovis.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={charlemagne.data}
          img={Charlemagne}
          imgClass={charlemagne.imgClass}
          imgPopUpClass={charlemagne.imgPopUpClass}
        />
        <TargetButton
          data={françois1er.data}
          img={François1er}
          imgClass={françois1er.imgClass}
          imgPopUpClass={françois1er.imgPopUpClass}
        />
        <TargetButton
          data={leonardoDaVinci.data}
          img={LeonardoDaVinci}
          imgClass={leonardoDaVinci.imgClass}
          item={leonardoDaVinci.item}
          imgPopUpClass={leonardoDaVinci.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={arthurPendragon.data}
          img={ArthurPendragon}
          imgClass={arthurPendragon.imgClass}
          item={arthurPendragon.item}
          imgPopUpClass={arthurPendragon.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />

        <ReturnGameMenu />
        <ReturnChooseLevelPageButton />
      </main>
      <TurnYourPhone />
    </>
  );
}

export default MiddleAge;
