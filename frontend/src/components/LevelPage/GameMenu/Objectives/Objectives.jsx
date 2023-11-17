import { useState } from "react";
import { useGlobalContext } from "../../../Context/GlobalContextProvider";
import "./Objectives.scss";
import NoteBook from "../../../../assets/pictures/ComponentsPics/NoteBook.png";

function Objectives() {
  const [showObjectives, setObjectives] = useState(true);
  const { bag, objectives } = useGlobalContext();

  const handleObjectivesToggle = () => {
    setObjectives(!showObjectives);
  };

  return (
    <>
      <button
        className="objButton"
        type="button"
        onClick={handleObjectivesToggle}
      >
        <img className="noteBook" src={NoteBook} alt="Liste des objectifs" />
      </button>
      <article
        className={`objectivesPopUp ${
          showObjectives ? "objectivesPopUp__show" : ""
        }`}
      >
        <header className="headerObjectives">
          <h2 className="objectivesTitle">Artefacts à collecter</h2>
          <button
            type="button"
            className="objectivesPopUp__closeButton"
            onClick={handleObjectivesToggle}
          >
            X
          </button>
        </header>
        <ul className="objectivesList">
          {objectives.map((e) => (
            <li
              key={e.item}
              className={
                bag.find((element) => element === e.item) ? "textObjective" : ""
              }
            >
              {e.objective}
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

export default Objectives;
