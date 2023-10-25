import Rules from "./Rules/Rules";
import Story from "./Story/Story";
import "./ContainerStoryRules.scss";

function ContainerStoryRules() {
  return (
    <section className="storyRules">
      <Story />
      <Rules />
      <button type="button" className="storyRules__playButton">
        Voyager
      </button>
    </section>
  );
}

export default ContainerStoryRules;
