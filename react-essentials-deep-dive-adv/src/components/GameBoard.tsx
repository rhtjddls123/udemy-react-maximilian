interface GameBoardProps {
  onSelectSquare: (rowIdx: number, colIdx: number) => void;
  gameBoard: (string | null)[][];
}

const GameBoard = ({ onSelectSquare, gameBoard }: GameBoardProps) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleSelectSquare = (rowIdx: number, colIdx: number) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updateGameBoard = [...prevGameBoard.map((innerArr) => [...innerArr])];
  //     const targetBoard = updateGameBoard[rowIdx][colIdx];
  //     if (targetBoard === null) {
  //       updateGameBoard[rowIdx][colIdx] = playerSymbol;
  //     }
  //     return updateGameBoard;
  //   });
  //   onSelectSquare();
  // };

  return (
    <ol className="my-12 flex flex-col gap-8">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol className="flex gap-8 justify-center">
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx} className="w-32 h-32">
                <button
                  onClick={() => onSelectSquare(rowIdx, colIdx)}
                  className="cursor-pointer p-4 text-7xl w-full h-full bg-neutral-300 text-gray-700 font-extrabold"
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
