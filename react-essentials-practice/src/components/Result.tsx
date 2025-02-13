import { userInput } from "../types";
import { calculateInvestmentResults, formatter } from "../util/investment";

interface ResultProps {
  userInput: userInput;
}

const Result = ({ userInput }: ResultProps) => {
  const calculateResult = calculateInvestmentResults(userInput);
  const initialInvestment =
    calculateResult[0].valueEndOfYear -
    calculateResult[0].interest -
    calculateResult[0].annualInvestment;

  return (
    <table className="max-w-3xl my-8 mx-auto p-4 border-spacing-4 text-right">
      <thead className="text-xs text-[#83e6c0]">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="text-sm font-bold text-[#c2e9e0]">
        {calculateResult.map((result) => {
          const { valueEndOfYear, interest, year, annualInvestment } = result;
          const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment;
          const investedCapital = valueEndOfYear - totalInterest;
          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
