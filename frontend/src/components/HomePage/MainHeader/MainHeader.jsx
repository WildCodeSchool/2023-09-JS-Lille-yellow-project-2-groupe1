import "./MainHeader.scss";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <header className="mainHeader">
      <h1 className="mainTitle">Le collectionneur temporel</h1>
      <Link to="/aboutus">
        <button type="button" className="aboutButton">
          A propos
        </button>
      </Link>
    </header>
  );
}

export default MainHeader;
