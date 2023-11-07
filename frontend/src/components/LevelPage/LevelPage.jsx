import { useRouteLoaderData } from "react-router-dom";
import TargetButton from "../TargetButton";
import GameMenu from "./GameMenu/GameMenu";
import "./LevelPage.scss";
import ReturnGameMenu from "./ReturnGameMenu/ReturnGameMenu";
import JurassicTheme from "../../assets/pictures/JurassicTheme.png";
import TurnYourPhone from "../../assets/pictures/TurnYourPhone.jpg";
import Pterodactyle from "../../assets/pictures/Pterodactyle.png";
import tRex from "../../assets/pictures/t-rex.svg";

function LevelPage() {
  const dinosaursArray = useRouteLoaderData("levelPage");
  const pterodactyle = {
    data: dinosaursArray.find((dinosaure) => dinosaure.id === 6),
    class: "pterodactyle",
  };
  const trex = {
    data: dinosaursArray.find((dinosaure) => dinosaure.id === 1),
    class: "t-rex",
  };

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
