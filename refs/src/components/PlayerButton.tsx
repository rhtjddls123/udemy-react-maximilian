import { ButtonHTMLAttributes, ReactNode } from "react";

interface PlayerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const PlayerButton = ({ children, ...props }: PlayerButtonProps) => {
  return (
    <button
      className="cursor-pointer bg-[#54a399] border border-solid border-[#54a399] py-[0.4rem] px-4 text-[#061e1a] rounded-tr rounded-br hover:bg-[#3c8379] hover:border-[#3c8379]"
      {...props}
    >
      {children}
    </button>
  );
};

export default PlayerButton;
