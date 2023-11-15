import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import Rules from "./Rules/Rules";
import Story from "./Story/Story";
import "./ContainerStoryRules.scss";

function ContainerStoryRules() {
  const objectivesItemArray = [
    {
      objective: "Récupérer l'oeuf du quetzalcoatlus",
      objectiveClass: "eggObjective",
      item: "egg",
    },
    {
      objective: "Récupérer la dent du Tyranossaurus Rex",
      objectiveClass: "toothObjective",
      item: "tooth",
    },
    {
      objective: "Récupérer une plume de vélociraptor",
      objectiveClass: "featherObjective",
      item: "feather",
    },
  ];
  const numberOfObjectives = 2;
  const { setObjectives, setBag } = useGlobalContext();
  function randomObjectives() {
    const objectivesArrayRandom = [];

    while (objectivesArrayRandom.length < numberOfObjectives) {
      const randomIndex = Math.floor(
        Math.random() * objectivesItemArray.length
      );
      const randomObjective = objectivesItemArray[randomIndex];

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
        to="/launcher"
        type="button"
        className="storyRules__playButton"
        onClick={() => {
          setObjectives(randomObjectives());
          setBag([]);
        }}
      >
        Voyager
      </Link>
    </section>
  );
}

export default ContainerStoryRules;
