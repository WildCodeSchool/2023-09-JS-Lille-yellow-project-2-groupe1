import "./HomePage.scss";
import ContainerStoryRules from "./ContainerStoryRules/ContainerStoryRules";
import theCollector from "../../assets/pictures/ComponentsPics/theCollector.png";
import TurnYourPhone from "../TurnYourPhone/TurnYourPhone";

function HomePage() {
  return (
    <main className="homePageElements">
      <img
        src={theCollector}
        alt=""
        className="homePageElements__mainCharacter"
      />
      <ContainerStoryRules />
      <TurnYourPhone />
    </main>
  );
}

export default HomePage;
