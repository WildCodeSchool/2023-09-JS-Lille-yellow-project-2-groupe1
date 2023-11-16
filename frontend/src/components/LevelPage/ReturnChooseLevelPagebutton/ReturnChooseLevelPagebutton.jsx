import { Link } from "react-router-dom";
import "./ReturnChooseLevelPageButton.scss";
import TimeMachine from "../../../assets/pictures/ComponentsPics/TimeMachine.png";

function ReturnChooseLevelPageButton() {
  return (
    <Link to="/ChooseLevelPage" className="playDevice">
      <img
        src={TimeMachine}
        alt="Retourner au sélécteur de niveaux"
        className="returnChooseLevelPage"
      />
    </Link>
  );
}

export default ReturnChooseLevelPageButton;
