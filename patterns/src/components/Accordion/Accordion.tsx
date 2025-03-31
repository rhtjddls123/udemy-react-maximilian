import { createContext, ReactNode, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

interface AccordionProps {
  className: string;
  children: ReactNode;
}

interface AccordionContextType {
  openItemId: string | null;
  toggleItem: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw Error("Accordion-related components must be wrapped by <Accordion>.");
  }

  return ctx;
}

const Accordion = ({ children, className }: AccordionProps) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const AccordionValue = {
    openItemId,
    toggleItem
  };

  return (
    <AccordionContext value={AccordionValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext>
  );
};

export default Accordion;

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
