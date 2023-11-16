import { Link } from "react-router-dom";
import "./ReturnChooseLevelPageButton.scss";

function ReturnChooseLevelPageButton() {
  return (
    <Link
      to="/ChooseLevelPage"
      className="returnChooseLevelPage"
      aria-label="retourner au sélécteur de niveaux"
    >
      ↩
    </Link>
  );
}

export default ReturnChooseLevelPageButton;
