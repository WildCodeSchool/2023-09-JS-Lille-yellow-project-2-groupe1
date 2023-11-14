import { useRouteLoaderData } from "react-router-dom";
import { useState } from "react";
import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import ReturnGameMenu from "./ReturnGameMenu/ReturnGameMenu";
import JurassicTheme from "../../assets/pictures/jurassic/JurassicTheme.png";
import TurnYourPhone from "../TurnYourPhone/TurnYourPhone";
import TargetButton from "./TargetButton/TargetButton";
import Quetzalcoatlus from "../../assets/pictures/jurassic/quetzalcoatlus.png";
import egg from "../../assets/pictures/jurassic/quetzalcoatlusEgg.png";
import tyrannosaurusRex from "../../assets/pictures/jurassic/t-rex.png";
import JurassicCharacter from "../../assets/pictures/jurassic/AvatarJurassic.png";

function LevelPage() {
  const characterClass = "jurassicCharacter";
  const [bag, setBag] = useState([]);
  const dinosaursArray = useRouteLoaderData("levelPage");
  function getDinosaurData(
    dinosaurId,
    imgClass,
    imgPopUpClass,
    itemName = null,
    itemSrc = null,
    itemClass = null,
    itemClassButton = null
  ) {
    return {
      data: dinosaursArray.find((dinosaure) => dinosaure.id === dinosaurId),
      imgClass,
      item: { itemName, itemSrc, itemClass, itemClassButton },
      imgPopUpClass,
    };
  }
  const tRex = getDinosaurData(1, "t-rex", "tRexPopUp");
  const quetzalcoatlus = getDinosaurData(
    6,
    "quetzalcoatlus",
    "quetzalcoatlusPopUp",
    "Oeuf de quetzalcoatlus",
    egg,
    "eggClass",
    "eggClassButton"
  );

  return (
    <>
      <main>
        <GameMenu
          bag={bag}
          characterImg={JurassicCharacter}
          characterClass={characterClass}
        />

        <TargetButton
          data={quetzalcoatlus.data}
          img={Quetzalcoatlus}
          imgClass={quetzalcoatlus.imgClass}
          item={quetzalcoatlus.item}
          imgPopUpClass={quetzalcoatlus.imgPopUpClass}
          bag={bag}
          setBag={setBag}
        />
        <TargetButton
          data={tRex.data}
          img={tyrannosaurusRex}
          imgClass={tRex.imgClass}
          imgPopUpClass={tRex.imgPopUpClass}
        />

        <img
          className="jurassicTheme"
          src={JurassicTheme}
          alt="Des dinosaures dans un paysage du Crétacé"
          draggable="false"
        />
        <ReturnGameMenu />
      </main>
      <TurnYourPhone />
    </>
  );
}

export default LevelPage;
