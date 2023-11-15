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
      objective: "Récupérer la dent du Tyranosaurus Rex",
      objectiveClass: "toothObjective",
      item: "tooth",
    },
    {
      objective: "Récupérer une griffe de vélociraptor",
      objectiveClass: "clawObjective",
      item: "claw",
    },
    {
      objective: "Récupérer le collier de Marie-Antoinette",
      objectiveClass: "necklaceObjective",
      item: "necklace",
    },
    {
      objective: "Récupérer l'épée de Napoléon",
      objectiveClass: "swordObjective",
      item: "sword",
    },
    {
      objective: "Récupérer le stylo de Victor Hugo",
      objectiveClass: "penObjective",
      item: "pen",
    },

    {
      objective: "Récupérer le sceptre de Toutankhamon",
      objectiveClass: "scepterObjective",
      item: "scepter",
    },
    {
      objective: "Récupérer le papyrus d'Annubis",
      objectiveClass: "papyrusObjective",
      item: "papyrus",
    },
    {
      objective: "Récupérer la tablette de Hiéroglyphe d'Isis",
      objectiveClass: "tabletObjective",
      item: "tablet",
    },
  ];
  const numberOfObjectives = 6;
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
