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
          value={userInput["InitialInvestment"]}
          onChange={(e) => handleChange("InitialInvestment", +e.target.value)}
        />
        <UserInput
          title="ANNUAL INVESTMENT"
          value={userInput["AnnualInvestment"]}
          onChange={(e) => handleChange("AnnualInvestment", +e.target.value)}
        />
        <UserInput
          title="EXPECTED RETURN"
          value={userInput["ExpectedReturn"]}
          onChange={(e) => handleChange("ExpectedReturn", +e.target.value)}
        />
        <UserInput
          title="DURATION"
          value={userInput["Duration"]}
          onChange={(e) => handleChange("Duration", +e.target.value)}
        />
      </div>
    </section>
  );
};

export default UserInputSection;
