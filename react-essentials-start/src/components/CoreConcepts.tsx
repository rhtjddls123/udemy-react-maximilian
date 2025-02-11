import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" className="p-8 rounded-md bg-[#140524] shadow-md">
      <ul className="flex flex-wrap justify-center gap-8 p-0 m-0 list-none ">
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
