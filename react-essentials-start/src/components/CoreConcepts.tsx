import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
  return (
    <section className="p-8 rounded-md bg-[#140524] shadow-md">
      <h2>Core Concepts</h2>
      <ul className="list-none p-0 m-0 flex gap-8 flex-wrap justify-center ">
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
