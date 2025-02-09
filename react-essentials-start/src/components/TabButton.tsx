import { ReactNode } from "react";

interface TabButtonProps {
  onSelect: () => void;
  isSelected: boolean;
  children: ReactNode;
}

const TabButton = ({ onSelect, isSelected, children }: TabButtonProps) => {
  let className =
    "py-2 px-4 border-none bg-transparent rounded-md text-[#a18aba] font-['Roboto Condensed', sans-serif] text-base cursor-pointer transition-all ease-in-out duration-200 hover:bg-[#1b082f] hover:text-[#ebe7ef]";
  if (isSelected) {
    className += " bg-purple-700 hover:bg-purple-700 text-[#ebe7ef]";
  }
  return (
    <button className={className} onClick={onSelect}>
      {children}
    </button>
  );
};

export default TabButton;
