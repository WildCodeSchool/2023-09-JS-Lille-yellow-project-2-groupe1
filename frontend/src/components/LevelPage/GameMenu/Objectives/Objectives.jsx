import { useState } from "react";
import "./Objectives.scss";

function Objectives() {
  const [showObjectives, setObjectives] = useState(false);

  const handleObjectivesToggle = () => {
    setObjectives(!showObjectives);
  };

  return (
    <>
      <div>
        <button type="button" onClick={handleObjectivesToggle}>
          <img
            className="noteBook"
            src="./src/assets/pictures/NoteBook.png"
            alt="List of objectives"
          />
        </button>
      </div>
      <article
        className={`objectivesPopUp ${
          showObjectives ? "objectivesPopUp__show" : ""
        }`}
      >
        <div className="openNotebook">
          <img
            src="./src/assets/pictures/OpenNotebook.jpg"
            alt="Open Notebook"
            id="openChooseLevelPage"
          />
          <button
            type="button"
            className="objectivesPopUp__closeButton"
            onClick={handleObjectivesToggle}
          >
            Close
          </button>
        </div>
      </article>
    </>
  );
}

export default Objectives;
