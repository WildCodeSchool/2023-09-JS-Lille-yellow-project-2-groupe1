import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import Rules from "./Rules/Rules";
import Story from "./Story/Story";
import "./ContainerStoryRules.scss";

function ContainerStoryRules() {
  const objectivesArray = [
    "Récupérer l'oeuf du quetzalcoatlus",
    "Récupérer la dent du Tyranossaurus Rex",
    "Récupérer une griffe de vélociraptor",
  ];

  const { setObjectives } = useGlobalContext();
  function randomObjectives() {
    const objectivesArrayRandom = [];

    while (objectivesArrayRandom.length < 2) {
      const randomIndex = Math.floor(Math.random() * objectivesArray.length);
      const randomObjective = objectivesArray[randomIndex];

      if (!objectivesArrayRandom.includes(randomObjective)) {
        objectivesArrayRandom.push(randomObjective);
      }
    }

    return objectivesArrayRandom;
  }

  return (
    <section className="storyRules">
      <Story />
      <Rules />
      <Link
        to="/ChooseLevelPage"
        type="button"
        className="storyRules__playButton"
        onClick={() => setObjectives([randomObjectives()])}
      >
        Voyager
      </Link>
    </section>
  );
}

export default ContainerStoryRules;
