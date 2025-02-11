import { ChangeEvent, useState } from "react";

interface PlayerProps {
  name: string;
  symbol: PlayerSymbol;
  isActive: boolean;
  onChangeName: (symbol: PlayerSymbol, newName: string) => void;
}

const Player = ({ name, symbol, isActive, onChangeName }: PlayerProps) => {
  const [isEditting, setIsEditting] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditting((pre) => !pre);

    if (isEditting) {
      onChangeName(symbol, playerName);
    }
  };

  const handleEditName = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  let playerNameComponent = (
    <span className="inline-block pl-5 w-full border border-transparent">{playerName}</span>
  );

  if (isEditting) {
    playerNameComponent = (
      <input
        type="text"
        className="border border-gray-200 w-full text-center"
        value={playerName}
        onChange={handleEditName}
      />
    );
  }

  let playerBoxClassName = "flex w-[50%] gap-6 p-4 border";

  if (isActive) {
    playerBoxClassName += " border-amber-300";
  } else {
    playerBoxClassName += " border-transparent";
  }

  return (
    <li className={playerBoxClassName}>
      <span className="flex gap-6 w-full">
        {playerNameComponent}
        <span>{symbol}</span>
      </span>
      <button onClick={handleEditClick} className="w-12 cursor-pointer hover:text-amber-200">
        {isEditting ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
