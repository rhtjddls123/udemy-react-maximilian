import { createContext, ReactNode, useContext } from "react";
import { useAccordionContext } from "./Accordion";

interface AccordionItemProps {
  id: string;
  className: string;
  children: ReactNode;
}

const AccordionItemContext = createContext<string | null>(null);

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw Error("AccordionItem-related components must be wrapper by <Accordion.Item>.");
  }

  return ctx;
}

const AccordionItem = ({ id, className, children }: AccordionItemProps) => {
  useAccordionContext();

  return (
    <AccordionItemContext value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext>
  );
};

export default AccordionItem;
