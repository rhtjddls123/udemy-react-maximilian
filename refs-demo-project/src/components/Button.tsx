import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-stone-700 py-2 px-4 rounded-md text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
