import { ReactNode } from "react";
import classes from "./PageContent.module.css";

interface PageContetProps {
  title: string;
  children: ReactNode;
}

function PageContent({ title, children }: PageContetProps) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
