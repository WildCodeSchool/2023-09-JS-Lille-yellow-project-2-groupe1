import { useRouteLoaderData } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import GameMenu from "../GameMenu/GameMenu";
import "./Modern.scss";
import ReturnGameMenu from "../ReturnGameMenu/ReturnGameMenu";
import TurnYourPhone from "../../TurnYourPhone/TurnYourPhone";
import TargetButton from "../TargetButton/TargetButton";
import Louis from "../../../assets/pictures/Modern/Louis.png";
import Napoleon from "../../../assets/pictures/Modern/Napoleon.png";
import MarieAntoinette from "../../../assets/pictures/Modern/MarieAntoinette.png";
import Hugo from "../../../assets/pictures/Modern/VictorHugo.png";
import Rousseau from "../../../assets/pictures/Modern/Rousseau.png";
import MontgolfierBrothers from "../../../assets/pictures/Modern/Montgolfierbrothers.png";
import NapoleonCharacter from "../../../assets/pictures/Modern/NapoleonCharacter.png";
import "../TargetButton/TargetButtonModern.scss";
import ReturnChooseLevelPageButton from "../ReturnChooseLevelPagebutton/ReturnChooseLevelPagebutton";
import pen from "../../../assets/pictures/Modern/HugoPen.png";
import necklace from "../../../assets/pictures/Modern/Necklace.png";
import sword from "../../../assets/pictures/Modern/NapoleonSword.png";
import Timer from "../../Timer/Timer";

function Modern() {
  const characterClass = "NapoleonCharacter";
  const { objectives, bag, setBag, score, setScore } = useGlobalContext();
  const modernArray = useRouteLoaderData("modern");
  function getModernData(
    modernId,
    imgClass,
    imgPopUpClass,
    itemName = null,
    itemSrc = null,
    itemClass = null,
    itemClassButton = null
  ) {
    return {
      data: modernArray.find((modern) => modern.id === modernId),
      imgClass,
      item: { itemName, itemSrc, itemClass, itemClassButton },
      imgPopUpClass,
    };
  }
  let napoleon;
  if (objectives.some((e) => e.item === "sword")) {
    napoleon = getModernData(
      1,
      "napoleon",
      "napoleonPopUp",
      "sword",
      sword,
      "swordClass",
      "swordClassButton"
    );
  } else {
    napoleon = getModernData(1, "napoleon", "napoleonPopUp");
  }
  const rousseau = getModernData(2, "rousseau", "rousseauPopUp");
  let marieAntoinette;
  if (objectives.some((e) => e.item === "necklace")) {
    marieAntoinette = getModernData(
      3,
      "marieAntoinette",
      "marieAntoinettePopUp",
      "necklace",
      necklace,
      "necklaceClass",
      "necklaceClassButton"
    );
  } else {
    marieAntoinette = getModernData(
      3,
      "marieAntoinette",
      "marieAntoinettePopUp"
    );
  }
  let victorHugo;
  if (objectives.some((e) => e.item === "pen")) {
    victorHugo = getModernData(
      4,
      "victorHugo",
      "victorHugoPopUp",
      "pen",
      pen,
      "penClass",
      "penClassButton"
    );
  } else {
    victorHugo = getModernData(4, "victorHugo", "victorHugoPopUp");
  }
  const louisXVI = getModernData(5, "louisXVI", "louisXVIPopUp");
  const mongolfierBrothers = getModernData(
    6,
    "montgolfier",
    "montgolfierPopUp"
  );

  return (
    <>
      <main className="modernTheme">
        <GameMenu
          bag={bag}
          characterImg={NapoleonCharacter}
          characterClass={characterClass}
        />

        <TargetButton
          data={napoleon.data}
          img={Napoleon}
          imgClass={napoleon.imgClass}
          item={napoleon.item}
          imgPopUpClass={napoleon.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={rousseau.data}
          img={Rousseau}
          imgClass={rousseau.imgClass}
          imgPopUpClass={rousseau.imgPopUpClass}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={marieAntoinette.data}
          img={MarieAntoinette}
          imgClass={marieAntoinette.imgClass}
          item={marieAntoinette.item}
          imgPopUpClass={marieAntoinette.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={louisXVI.data}
          img={Louis}
          imgClass={louisXVI.imgClass}
          imgPopUpClass={louisXVI.imgPopUpClass}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={victorHugo.data}
          img={Hugo}
          imgClass={victorHugo.imgClass}
          item={victorHugo.item}
          imgPopUpClass={victorHugo.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={mongolfierBrothers.data}
          img={MontgolfierBrothers}
          imgClass={mongolfierBrothers.imgClass}
          imgPopUpClass={mongolfierBrothers.imgPopUpClass}
          score={score}
          setScore={setScore}
        />

        <ReturnGameMenu />
      </main>
      <TurnYourPhone />
      <ReturnChooseLevelPageButton />
      <Timer />
    </>
  );
}

export default Modern;
