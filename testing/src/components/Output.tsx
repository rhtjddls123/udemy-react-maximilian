import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Output = ({ children }: props) => {
  return <p>{children}</p>;
};

export default Output;
