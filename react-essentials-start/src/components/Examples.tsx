import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import TabContent from "./TabContent";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState<ConceptsType>();

  const handleSelect = (selectedButton: ConceptsType) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please click a button</p>;

  if (selectedTopic) {
    tabContent = <TabContent {...EXAMPLES[selectedTopic]} />;
  }
  return (
    <section className="my-12 mx-auto">
      <h2 className="text-left">Examples</h2>
      <menu className="my-4 mx-0 p-0 flex gap-2 list-none">
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>
          JSX
        </TabButton>
        <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>
          Props
        </TabButton>
        <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
};

export default Examples;
