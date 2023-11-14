import { useRouteLoaderData } from "react-router-dom";
import GameMenu from "./GameMenu/GameMenu";
import ReturnGameMenu from "./ReturnGameMenu/ReturnGameMenu";
import TurnYourPhone from "../TurnYourPhone/TurnYourPhone";
import TargetButton from "./TargetButton/TargetButton";
import "./TargetButton/TargetButton.scss";
import "./TargetButton/TargetButtonEgypt.scss";
import Horus from "../../assets/pictures/Egypt/Horus.png";
import Anubis from "../../assets/pictures/Egypt/Anubis.png";
import Isis from "../../assets/pictures/Egypt/Isis.png";
import Toutankhamon from "../../assets/pictures/Egypt/Toutankhamon.png";
import Re from "../../assets/pictures/Egypt/re.png";
import "./Egypt.scss";
import tablette from "../../assets/pictures/Egypt/tablette.png";

function Egypt() {
  const egyptArray = useRouteLoaderData("egypt");
  function getEgyptData(
    egyptId,
    imgClass,
    imgPopUpClass,
    itemName = null,
    itemSrc = null,
    itemClass = null,
    itemClassButton = null
  ) {
    return {
      data: egyptArray.find((egypt) => egypt.id === egyptId),
      imgClass,
      item: { itemName, itemSrc, itemClass, itemClassButton },
      imgPopUpClass,
    };
  }

  const toutankhamon = getEgyptData(1, "toutankhamon", "toutankhamonPopUp");
  const horus = getEgyptData(2, "horus", "horusPopUp");
  const isis = getEgyptData(
    3,
    "isis",
    "isisPopUp",
    "Tablette de hieroglyphe",
    tablette,
    "tabletClass",
    "tabletClassButton"
  );
  const re = getEgyptData(4, "re", "rePopUp");
  const anubis = getEgyptData(5, "anubis", "anubisPopUp");

  return (
    <>
      <main className="egyptTheme">
        <GameMenu />

        <TargetButton
          data={toutankhamon.data}
          img={Toutankhamon}
          imgClass={toutankhamon.imgClass}
          imgPopUpClass={toutankhamon.imgPopUpClass}
        />
        <TargetButton
          data={horus.data}
          img={Horus}
          imgClass={horus.imgClass}
          imgPopUpClass={horus.imgPopUpClass}
        />
        <TargetButton
          data={isis.data}
          img={Isis}
          imgClass={isis.imgClass}
          item={isis.item}
          imgPopUpClass={isis.imgPopUpClass}
        />
        <TargetButton
          data={re.data}
          img={Re}
          imgClass={re.imgClass}
          imgPopUpClass={re.imgPopUpClass}
        />
        <TargetButton
          data={anubis.data}
          img={Anubis}
          imgClass={anubis.imgClass}
          imgPopUpClass={anubis.imgPopUpClass}
        />
        <ReturnGameMenu />
      </main>
      <TurnYourPhone />
    </>
  );
}
export default Egypt;
