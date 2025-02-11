import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import TabContent from "./TabContent";
import Section from "./Section";
import Tabs from "./Tabs";

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
    <Section title="Examples" className="my-12 mx-auto [&>h2]:text-left">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}>
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
