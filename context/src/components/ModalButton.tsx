import { HTMLAttributes, ReactNode } from "react";

interface ModalButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ModalButton = ({ children, ...props }: ModalButtonProps) => {
  return (
    <button
      className="bg-transparent border-none rounded-md text-[#201e1a] cursor-pointer text-[1.1rem] hover:text-[#453719] last-of-type:bg-[#271e07] last-of-type:border-none last-of-type:rounded-md last-of-type:py-2 last-of-type:px-4 last-of-type:text-[#f9efda] last-of-type:text-base last-of-type:cursor-pointer last-of-type:hover:bg-[#382e1b] last-of-type:hover:last-of-type:text-[#f9efda]"
      {...props}
    >
      {children}
    </button>
  );
};

export default ModalButton;
