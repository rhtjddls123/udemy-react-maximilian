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
      <Result />
    </main>
  );
};

export default Main;
