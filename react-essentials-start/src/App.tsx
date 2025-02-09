import { useState } from "react";
import "./App.css";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton.tsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.ts";
import TabContent from "./components/TabContent.tsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState<ConceptsType>();

  const handleSelect = (selectedButton: ConceptsType) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please click a button</p>;

  if (selectedTopic) {
    tabContent = <TabContent {...EXAMPLES[selectedTopic]} />;
  }

  return (
    <>
      <div>
        <Header />
        <main>
          <section className="p-8 rounded-md bg-[#140524] shadow-md">
            <h2>Core Concepts</h2>
            <ul className="list-none p-0 m-0 flex gap-8 flex-wrap justify-center ">
              {CORE_CONCEPTS.map((conceptItem) => (
                <CoreConcept key={conceptItem.title} {...conceptItem} />
              ))}
            </ul>
          </section>
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
              <TabButton
                isSelected={selectedTopic === "props"}
                onSelect={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onSelect={() => handleSelect("state")}
              >
                State
              </TabButton>
            </menu>
          </section>
          {tabContent}
        </main>
      </div>
    </>
  );
}

export default App;
