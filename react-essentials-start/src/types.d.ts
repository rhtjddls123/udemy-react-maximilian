type ConceptsType = "components" | "jsx" | "props" | "state";

interface ExamplesType {
  [key in ConceptsType]: {
    title: string;
    description: string;
    code: string;
  };
}
