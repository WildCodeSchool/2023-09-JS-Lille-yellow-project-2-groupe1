import { useRouteLoaderData } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContextProvider";
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
import tablet from "../../assets/pictures/Egypt/tablet.png";
import scepter from "../../assets/pictures/Egypt/sceptre.png";
import papyrus from "../../assets/pictures/Egypt/papyrus.png";
import egyptCharacter from "../../assets/pictures/Egypt/EgyptCharacter.png";

function Egypt() {
  const characterClass = "egyptCharacter";
  const { objectives, bag, setBag } = useGlobalContext();
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

  let toutankhamon;
  if (objectives.some((e) => e.item === "scepter")) {
    toutankhamon = getEgyptData(
      1,
      "toutankhamon",
      "toutankhamonPopUp",
      "scepter",
      scepter,
      "sceptreClass",
      "sceptreClassButton"
    );
  } else {
    toutankhamon = getEgyptData(1, "toutankhamon", "toutankhamonPopUp");
  }
  const horus = getEgyptData(2, "horus", "horusPopUp");
  let isis;
  if (objectives.some((e) => e.item === "tablet")) {
    isis = getEgyptData(
      3,
      "isis",
      "isisPopUp",
      "tablet",
      tablet,
      "tabletClass",
      "tabletClassButton"
    );
  } else {
    isis = getEgyptData(3, "isis", "isisPopUp");
  }

  const re = getEgyptData(4, "re", "rePopUp");
  let anubis;
  if (objectives.some((e) => e.item === "papyrus")) {
    anubis = getEgyptData(
      5,
      "anubis",
      "anubisPopUp",
      "papyrus",
      papyrus,
      "papyrusClass",
      "papyrusClassbutton"
    );
  } else {
    anubis = getEgyptData(5, "anubis", "anubisPopUp");
  }

  return (
    <>
      <main className="egyptTheme">
        <GameMenu
          bag={bag}
          characterImg={egyptCharacter}
          characterClass={characterClass}
        />

        <TargetButton
          data={toutankhamon.data}
          img={Toutankhamon}
          imgClass={toutankhamon.imgClass}
          item={toutankhamon.item}
          imgPopUpClass={toutankhamon.imgPopUpClass}
          bag={bag}
          setBag={setBag}
        />
        <TargetButton
          data={horus.data}
          img={Horus}
          imgClass={horus.imgClass}
          imgPopUpClass={horus.imgPopUpClass}
          bag={bag}
          setBag={setBag}
        />
        <TargetButton
          data={isis.data}
          img={Isis}
          imgClass={isis.imgClass}
          item={isis.item}
          imgPopUpClass={isis.imgPopUpClass}
          bag={bag}
          setBag={setBag}
        />
        <TargetButton
          data={re.data}
          img={Re}
          imgClass={re.imgClass}
          imgPopUpClass={re.imgPopUpClass}
          bag={bag}
          setBag={setBag}
        />
        <TargetButton
          data={anubis.data}
          img={Anubis}
          imgClass={anubis.imgClass}
          item={anubis.item}
          imgPopUpClass={anubis.imgPopUpClass}
          bag={bag}
          setBag={setBag}
        />
        <ReturnGameMenu />
      </main>
      <TurnYourPhone />
    </>
  );
}
export default Egypt;
