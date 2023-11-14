import { useRouteLoaderData } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import ReturnGameMenu from "./ReturnGameMenu/ReturnGameMenu";
import JurassicTheme from "../../assets/pictures/jurassic/JurassicTheme.png";
import TurnYourPhone from "../TurnYourPhone/TurnYourPhone";
import TargetButton from "./TargetButton/TargetButton";
import Quetzalcoatlus from "../../assets/pictures/jurassic/quetzalcoatlus.png";
import egg from "../../assets/pictures/jurassic/quetzalcoatlusEgg.png";
import tyrannosaurusRex from "../../assets/pictures/jurassic/t-rex.png";
import tooth from "../../assets/pictures/jurassic/tRexTooth.png";

function LevelPage() {
  const { objectives, bag, setBag } = useGlobalContext();
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
  let tRex;
  if (objectives[0].some((e) => e.item === "tooth")) {
    tRex = getDinosaurData(
      1,
      "t-rex",
      "tRexPopUp",
      "tooth",
      tooth,
      "toothClass",
      "toothClassButton"
    );
  } else {
    tRex = getDinosaurData(1, "t-rex", "tRexPopUp");
  }
  let quetzalcoatlus;
  if (objectives[0].some((e) => e.item === "egg")) {
    quetzalcoatlus = getDinosaurData(
      6,
      "quetzalcoatlus",
      "quetzalcoatlusPopUp",
      "egg",
      egg,
      "eggClass",
      "eggClassButton"
    );
  } else {
    quetzalcoatlus = getDinosaurData(
      6,
      "quetzalcoatlus",
      "quetzalcoatlusPopUp"
    );
  }
  return (
    <>
      <main>
        <GameMenu bag={bag} />

        <TargetButton
          dino={quetzalcoatlus.data}
          img={Quetzalcoatlus}
          imgClass={quetzalcoatlus.imgClass}
          item={quetzalcoatlus.item}
          imgPopUpClass={quetzalcoatlus.imgPopUpClass}
          bag={bag}
          setBag={setBag}
        />
        <TargetButton
          dino={tRex.data}
          img={tyrannosaurusRex}
          imgClass={tRex.imgClass}
          item={tRex.item}
          imgPopUpClass={tRex.imgPopUpClass}
          bag={bag}
          setBag={setBag}
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
