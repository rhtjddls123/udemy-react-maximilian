interface GameOverProps {
  winner?: string;
  onRestart: () => void;
}

const GameOver = ({ winner, onRestart }: GameOverProps) => {
  return (
    <div className="absolute gap-12 top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-900 opacity-95">
      <h2 className="text-7xl text-[#fcd256]">Game Over!</h2>
      {winner && <p className="text-4xl text-[#e1dec7]">{winner} won!</p>}
      {!winner && <p className="text-4xl text-[#e1dec7]">It's draw!</p>}
      <p className="text-4xl text-[#e1dec7]">
        <button
          onClick={onRestart}
          className="text-2xl border-2 border-[#fcd256] text-[#fcd256] py-2 px-4 rounded-sm cursor-pointer hover:bg-[#fcd256] hover:text-[#3f3b00] hover:scale-110 transition-transform duration-200"
        >
          Rematch!
        </button>
      </p>
    </div>
  );
};

export default GameOver;
