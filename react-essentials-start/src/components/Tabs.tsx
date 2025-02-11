import { ElementType, JSX, ReactNode } from "react";

interface TabsProps {
  ButtonsContainer?: keyof JSX.IntrinsicElements | ElementType;
  buttons: ReactNode;
  children: ReactNode;
}

const Tabs = ({ buttons, ButtonsContainer = "menu", children }: TabsProps) => {
  return (
    <>
      <ButtonsContainer className="flex gap-2 p-0 mx-0 my-4 list-none">{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
