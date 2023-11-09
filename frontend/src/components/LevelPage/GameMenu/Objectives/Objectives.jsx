import { useState } from "react";
import "./Objectives.scss";
import NoteBook from "../../../../assets/pictures/ComponentsPics/NoteBook.png";
import OpenNoteBook from "../../../../assets/pictures/ComponentsPics/OpenNotebook.jpg";

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
        <img className="noteBook" src={NoteBook} alt="Liste des objectifs" />
      </button>
      <article
        className={`objectivesPopUp ${
          showObjectives ? "objectivesPopUp__show" : ""
        }`}
      >
        <section className="openNotebook">
          <img
            src={OpenNoteBook}
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
