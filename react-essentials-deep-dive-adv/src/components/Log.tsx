interface LogProps {
  gameTurns: TurnsType;
}

const Log = ({ gameTurns }: LogProps) => {
  return (
    <ol className="flex flex-col gap-2">
      {gameTurns.map((turn) => (
        <li
          className="text-center text-black "
          key={`${turn.square.row} ${turn.square.col}`}
        >{`${turn.player} selected ${turn.square.row},${turn.square.col}`}</li>
      ))}
    </ol>
  );
};

export default Log;
