import { useRouteLoaderData } from "react-router-dom";
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
import "../TargetButton/TargetButtonModern.scss";
import ReturnChooseLevelPageButton from "../ReturnChooseLevelPagebutton/ReturnChooseLevelPagebutton";

function Modern() {
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
  const napoleon = getModernData(1, "napoleon", "napoleonPopUp");
  const rousseau = getModernData(2, "rousseau", "rousseauPopUp");
  const marieAntoinette = getModernData(
    3,
    "marieAntoinette",
    "marieAntoinettePopUp"
  );
  const victorHugo = getModernData(4, "victorHugo", "victorHugoPopUp");
  const louisXVI = getModernData(5, "louisXVI", "louisXVIPopUp");

  return (
    <>
      <main className="modernTheme">
        <GameMenu />

        <TargetButton
          data={napoleon.data}
          img={Napoleon}
          imgClass={napoleon.imgClass}
          imgPopUpClass={napoleon.imgPopUpClass}
          className={napoleon}
        />
        <TargetButton
          data={rousseau.data}
          img={Rousseau}
          imgClass={rousseau.imgClass}
          imgPopUpClass={rousseau.imgPopUpClass}
        />
        <TargetButton
          data={marieAntoinette.data}
          img={MarieAntoinette}
          imgClass={marieAntoinette.imgClass}
          imgPopUpClass={marieAntoinette.imgPopUpClass}
        />
        <TargetButton
          data={louisXVI.data}
          img={Louis}
          imgClass={louisXVI.imgClass}
          imgPopUpClass={louisXVI.imgPopUpClass}
        />
        <TargetButton
          data={victorHugo.data}
          img={Hugo}
          imgClass={victorHugo.imgClass}
          imgPopUpClass={victorHugo.imgPopUpClass}
        />

        <ReturnGameMenu />
      </main>
      <TurnYourPhone />
      <ReturnChooseLevelPageButton />
    </>
  );
}

export default Modern;
