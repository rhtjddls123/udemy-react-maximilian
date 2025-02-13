import { useState } from "react";
import Result from "./Result";
import UserInputSection from "./UserInputSection";
import { InputType, userInput } from "../types";

const Main = () => {
  const [userInput, setUserInput] = useState<userInput>({
    InitialInvestment: 10000,
    AnnualInvestment: 1200,
    ExpectedReturn: 6,
    Duration: 10
  });

  const handleChange = (inputIdentifier: InputType, newValue: number) => {
    setUserInput((prev) => {
      return { ...prev, [inputIdentifier]: newValue };
    });
  };
  return (
    <main>
      <UserInputSection userInput={userInput} handleChange={handleChange} />
      {userInput.Duration > 0 && <Result userInput={userInput} />}
      {!(userInput.Duration > 0) && (
        <p className="text-center mt-4">Please enter a duration greater than zero.</p>
      )}
    </main>
  );
};

export default Main;
