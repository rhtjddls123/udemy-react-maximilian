import { InputType, userInput } from "../types";
import UserInput from "./UserInput";

interface UserInputSectionProps {
  userInput: userInput;
  handleChange: (inputIdentifier: InputType, newValue: number) => void;
}

const UserInputSection = ({ userInput, handleChange }: UserInputSectionProps) => {
  return (
    <section
      className="max-w-lg mx-auto my-8 p-4 rounded"
      style={{ background: "linear-gradient(180deg, #307e6c, #2b996d)" }}
    >
      <div className="grid grid-cols-2 gap-x-8">
        <UserInput
          title="INITIAL INVESTMENT"
          userInput={userInput}
          inputIdentifier="InitialInvestment"
          handleChange={handleChange}
        />
        <UserInput
          title="ANNUAL INVESTMENT"
          userInput={userInput}
          inputIdentifier="AnnualInvestment"
          handleChange={handleChange}
        />
        <UserInput
          title="EXPECTED RETURN"
          userInput={userInput}
          inputIdentifier="ExpectedReturn"
          handleChange={handleChange}
        />
        <UserInput
          title="DURATION"
          userInput={userInput}
          inputIdentifier="Duration"
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};

export default UserInputSection;
