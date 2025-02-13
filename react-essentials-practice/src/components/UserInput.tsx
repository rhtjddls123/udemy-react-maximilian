import { InputType, userInput } from "../types";

interface UserInputProps {
  title: string;
  userInput: userInput;
  inputIdentifier: InputType;
  handleChange: (inputIdentifier: InputType, newValue: number) => void;
}

const UserInput = ({ title, userInput, inputIdentifier, handleChange }: UserInputProps) => {
  return (
    <p className="flex flex-col">
      <label className="text-[0.5rem] font-bold mb-1">{title}</label>
      <input
        className="bg-transparent border border-solid border-[#76c0ae] rounded p-2 text-[#c2e9e0]"
        type="number"
        value={userInput[inputIdentifier]}
        onChange={(e) => handleChange(inputIdentifier, +e.target.value)}
      />
    </p>
  );
};

export default UserInput;
