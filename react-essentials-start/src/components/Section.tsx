import { HTMLAttributes, ReactNode } from "react";

interface SectionType extends HTMLAttributes<HTMLElement> {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children, ...props }: SectionType) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
