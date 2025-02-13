import { InputHTMLAttributes } from "react";

interface UserInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const UserInput = ({ title, ...props }: UserInputProps) => {
  return (
    <p className="flex flex-col">
      <label className="text-[0.5rem] font-bold mb-1">{title}</label>
      <input
        className="bg-transparent border border-solid border-[#76c0ae] rounded p-2 text-[#c2e9e0]"
        type="number"
        {...props}
      />
    </p>
  );
};

export default UserInput;
