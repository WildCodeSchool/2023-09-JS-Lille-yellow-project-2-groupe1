import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import Rules from "./Rules/Rules";
import Story from "./Story/Story";
import "./ContainerStoryRules.scss";

function ContainerStoryRules() {
  const objectivesItemArray = [
    {
      objective: "Un oeuf du quetzalcoatlus",
      objectiveClass: "eggObjective",
      item: "egg",
    },
    {
      objective: "Une dent du Tyranosaurus Rex",
      objectiveClass: "toothObjective",
      item: "tooth",
    },
    {
      objective: "Une griffe de vélociraptor",
      objectiveClass: "clawObjective",
      item: "claw",
    },
    {
      objective: "Le collier de Marie-Antoinette",
      objectiveClass: "necklaceObjective",
      item: "necklace",
    },
    {
      objective: "L'épée de Napoléon",
      objectiveClass: "swordObjective",
      item: "sword",
    },
    {
      objective: "Le stylo de Victor Hugo",
      objectiveClass: "penObjective",
      item: "pen",
    },
    {
      objective: "Le sceptre de Toutankhamon",
      objectiveClass: "scepterObjective",
      item: "scepter",
    },
    {
      objective: "Le papyrus d'Annubis",
      objectiveClass: "papyrusObjective",
      item: "papyrus",
    },
    {
      objective: "La tablette de Hiéroglyphe d'Isis",
      objectiveClass: "tabletObjective",
      item: "tablet",
    },
  ];
  const numberOfObjectives = 8;
  const { setObjectives, setBag, setScore, setTime } = useGlobalContext();
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
          setTime(600);
          setScore(0);
        }}
      >
        Jouer
      </Link>
    </section>
  );
}

export default ContainerStoryRules;
