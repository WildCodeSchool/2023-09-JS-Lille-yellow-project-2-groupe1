import { Link } from "react-router-dom";
import Rules from "./Rules/Rules";
import Story from "./Story/Story";
import "./ContainerStoryRules.scss";

function ContainerStoryRules() {
  return (
    <section className="storyRules">
      <Story />
      <Rules />
      <Link
        to="/ChooseLevelPage"
        type="button"
        className="storyRules__playButton"
      >
        Voyager
      </Link>
    </section>
  );
}

export default ContainerStoryRules;
