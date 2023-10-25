import Rules from "./Rules/Rules";
import Story from "./Story/Story";
import "./ContainerStoryRules.scss";

function ContainerStoryRules() {
  return (
    <div className="storyRules">
      <Story />
      <Rules />
      <button type="button" className="playButton">
        Voyager
      </button>
    </div>
  );
}

export default ContainerStoryRules;
