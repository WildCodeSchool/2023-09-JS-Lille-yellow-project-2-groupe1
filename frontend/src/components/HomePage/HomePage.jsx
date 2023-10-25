import MainHeader from "./MainHeader/MainHeader";
import "./HomePage.scss";
import ContainerStoryRules from "./ContainerStoryRules/ContainerStoryRules";

function HomePage() {
  return (
    <>
      <MainHeader />
      <div className="homePageElements">
        <img
          src="https://img.freepik.com/photos-premium/portrait-steampunk-captivant-capturant-essence-savant-fou-victorien_836303-140.jpg"
          alt=""
          className="mainCharacter"
        />
        <ContainerStoryRules />
      </div>
    </>
  );
}

export default HomePage;
