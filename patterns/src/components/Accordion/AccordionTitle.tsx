import { ReactNode } from "react";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

interface AccordionTitleProps {
  className: string;
  children: ReactNode;
}

const AccordionTitle = ({ className, children }: AccordionTitleProps) => {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
};

export default AccordionTitle;
