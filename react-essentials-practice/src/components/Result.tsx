const Result = () => {
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
        <tr>
          <td>1</td>
          <td>$11,800</td>
          <td>$600</td>
          <td>$600</td>
          <td>$11,200</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Result;
