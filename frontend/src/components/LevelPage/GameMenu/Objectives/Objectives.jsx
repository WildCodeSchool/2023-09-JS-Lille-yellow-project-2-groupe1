import { useState } from "react";
import "./Objectives.scss";

function Objectives() {
  const [showObjectives, setObjectives] = useState(false);

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
        <img
          className="noteBook"
          src="./src/assets/pictures/NoteBook.png"
          alt="Liste des objectifs"
        />
      </button>
      <article
        className={`objectivesPopUp ${
          showObjectives ? "objectivesPopUp__show" : ""
        }`}
      >
        <section className="openNotebook">
          <img
            src="./src/assets/pictures/OpenNotebook.jpg"
            alt="Open Notebook"
            className="openRegister"
          />
          <button
            type="button"
            className="objectivesPopUp__closeButton"
            onClick={handleObjectivesToggle}
          >
            Fermé
          </button>
        </section>
      </article>
    </>
  );
}

export default Objectives;
