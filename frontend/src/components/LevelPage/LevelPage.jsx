import { useRouteLoaderData } from "react-router-dom";
import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import ReturnGameMenu from "./ReturnGameMenu/ReturnGameMenu";
import JurassicTheme from "../../assets/pictures/jurassic/JurassicTheme.png";
import JurassicTheme from "../../assets/pictures/jurassic/JurassicTheme.png";
import TurnYourPhone from "../TurnYourPhone/TurnYourPhone";
import TargetButton from "./TargetButton/TargetButton";
import Pterodactyle from "../../assets/pictures/jurassic/Pterodactyle.png";
import egg from "../../assets/pictures/jurassic/Pterodactyle-egg.png";
import tyrannosaurusRex from "../../assets/pictures/jurassic/t-rex.png";

function LevelPage() {
  const dinosaursArray = useRouteLoaderData("levelPage");
  function getDinosaurData(
    dinosaurId,
    imgClass,
    imgPopUpClass,
    itemName = "",
    itemSrc = "",
    itemClass = "",
    itemClassButton = ""
  ) {
    return {
      data: dinosaursArray.find((dinosaure) => dinosaure.id === dinosaurId),
      imgClass,
      item: { itemName, itemSrc, itemClass, itemClassButton },
      imgPopUpClass,
    };
  }
  const tRex = getDinosaurData(1, "t-rex", "tRexPopUp");
  const pterodactyle = getDinosaurData(
    6,
    "pterodactyle",
    "pterodactylePopUp",
    "Oeuf de pterodactyle",
    egg,
    "eggClass",
    "eggClassButton"
  );

  return (
    <>
      <main>
        <GameMenu />

        <TargetButton
          dino={pterodactyle.data}
          img={Pterodactyle}
          imgClass={pterodactyle.imgClass}
          item={pterodactyle.item}
          imgPopUpClass={pterodactyle.imgPopUpClass}
        />
        <TargetButton
          dino={tRex.data}
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
