import { useState } from "react";
import "./Objectives.scss";
import NoteBook from "../../../../assets/pictures/ComponentsPics/NoteBook.png";

function Objectives() {
  const [showObjectives, setObjectives] = useState(true);

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
        <button
          type="button"
          className="objectivesPopUp__closeButton"
          aria-label="Fermer la pop-up"
          onClick={handleObjectivesToggle}
        >
          X
        </button>
      </article>
    </>
  );
}

export default Objectives;
