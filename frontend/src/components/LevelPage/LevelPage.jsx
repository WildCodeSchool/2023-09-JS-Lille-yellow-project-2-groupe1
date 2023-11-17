import { useRouteLoaderData } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import ReturnGameMenu from "./ReturnGameMenu/ReturnGameMenu";
import TurnYourPhone from "../TurnYourPhone/TurnYourPhone";
import TargetButton from "./TargetButton/TargetButton";
import Quetzalcoatlus from "../../assets/pictures/jurassic/quetzalcoatlus.png";
import egg from "../../assets/pictures/jurassic/quetzalcoatlusEgg.png";
import tyrannosaurusRex from "../../assets/pictures/jurassic/t-rex.png";
import JurassicCharacter from "../../assets/pictures/jurassic/AvatarJurassic.png";
import tooth from "../../assets/pictures/jurassic/tRexTooth.png";
import Timer from "../Timer/Timer";
import Velociraptor from "../../assets/pictures/jurassic/velociraptor.png";
import claw from "../../assets/pictures/jurassic/velociraptorclaw.png";
import Triceratops from "../../assets/pictures/jurassic/triceraptops.png";
import Brachiosaurus from "../../assets/pictures/jurassic/brachiosaurus.png";
import Stegosaurus from "../../assets/pictures/jurassic/stegosaurus.png";
import ReturnChooseLevelPageButton from "./ReturnChooseLevelPagebutton/ReturnChooseLevelPagebutton";

function LevelPage() {
  const characterClass = "jurassicCharacter";
  const { objectives, bag, setBag, score, setScore } = useGlobalContext();
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
  if (objectives.some((e) => e.item === "tooth")) {
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

  const triceratops = getDinosaurData(2, "triceratops", "triceratopsPopUp");

  let velociraptor;
  if (objectives.some((e) => e.item === "claw")) {
    velociraptor = getDinosaurData(
      3,
      "velociraptor",
      "velociraptorPopUp",
      "claw",
      claw,
      "clawClass",
      "clawClassButton"
    );
  } else {
    velociraptor = getDinosaurData(3, "velociraptor", "velociraptorPopUp");
  }

  const brachiosaurus = getDinosaurData(
    4,
    "brachiosaurus",
    "brachiosaurusPopUp"
  );

  const stegosaurus = getDinosaurData(5, "stegosaurus", "stegosaurusPopUp");

  let quetzalcoatlus;
  if (objectives.some((e) => e.item === "egg")) {
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
      <main className="jurrassicTheme">
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
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={tRex.data}
          img={tyrannosaurusRex}
          imgClass={tRex.imgClass}
          item={tRex.item}
          imgPopUpClass={tRex.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={velociraptor.data}
          img={Velociraptor}
          imgClass={velociraptor.imgClass}
          item={velociraptor.item}
          imgPopUpClass={velociraptor.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={triceratops.data}
          img={Triceratops}
          imgClass={triceratops.imgClass}
          imgPopUpClass={triceratops.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={brachiosaurus.data}
          img={Brachiosaurus}
          imgClass={brachiosaurus.imgClass}
          imgPopUpClass={brachiosaurus.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <TargetButton
          data={stegosaurus.data}
          img={Stegosaurus}
          imgClass={stegosaurus.imgClass}
          imgPopUpClass={stegosaurus.imgPopUpClass}
          bag={bag}
          setBag={setBag}
          score={score}
          setScore={setScore}
        />
        <ReturnChooseLevelPageButton />
        <ReturnGameMenu />
      </main>
      <TurnYourPhone />
      <Timer />
    </>
  );
}

export default LevelPage;
