import "./MainHeader.scss";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <header>
      <h1 className="mainTitle">Le collectionneur temporel</h1>
      <Link to="/aboutus" type="button" className="aboutButton">
        A propos
      </Link>
    </header>
  );
}

export default MainHeader;
