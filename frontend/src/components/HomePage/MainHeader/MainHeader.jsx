import "./MainHeader.scss";

function MainHeader() {
  return (
    <header>
      <div className="mainTitle">
        <h1>Le collectionneur temporel</h1>
      </div>
      <button type="button" className="aboutButton">
        A propos
      </button>
    </header>
  );
}

export default MainHeader;
