import { useRouteLoaderData } from "react-router-dom";
import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import ReturnGameMenu from "./ReturnGameMenu/ReturnGameMenu";
import JurassicTheme from "../../assets/pictures/Jurassic/JurassicTheme.png";
import TurnYourPhone from "../TurnYourPhone/TurnYourPhone";
import TargetButton from "./TargetButton/TargetButton";
import Pterodactyle from "../../assets/pictures/Jurassic/Pterodactyle.png";
import tRex from "../../assets/pictures/Jurassic/t-rex.png";

function LevelPage() {
  const dinosaursArray = useRouteLoaderData("levelPage");
  function getDinosaurData(dinosaurId, classtag) {
    return {
      data: dinosaursArray.find((dinosaure) => dinosaure.id === dinosaurId),
      class: classtag,
    };
  }
  const trex = getDinosaurData(1, "t-rex");
  const pterodactyle = getDinosaurData(6, "pterodactyle");
  return (
    <>
      <main>
        <GameMenu />

        <TargetButton
          dino={pterodactyle.data}
          img={Pterodactyle}
          classtag={pterodactyle.class}
        />
        <TargetButton dino={trex.data} img={tRex} classtag={trex.class} />

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
