import { useRouteLoaderData } from "react-router-dom";
import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import ReturnGameMenu from "./ReturnGameMenu/ReturnGameMenu";
import JurassicTheme from "../../assets/pictures/jurassic/JurassicTheme.png";
import TurnYourPhone from "../../assets/pictures/TurnYourPhone.jpg";
import TargetButton from "./TargetButton/TargetButton";
import Pterodactyle from "../../assets/pictures/jurassic/Pterodactyle.png";
import tRex from "../../assets/pictures/t-rex.png";

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
      <img
        className="turnYourPhone"
        src={TurnYourPhone}
        alt="Tournes ton téléphone en paysage"
      />
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
    </>
  );
}

export default LevelPage;
