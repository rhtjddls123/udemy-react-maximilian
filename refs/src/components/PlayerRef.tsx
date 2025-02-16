import { useRef, useState } from "react";
import PlayerInput from "./PlayerInput";
import PlayerButton from "./PlayerButton";

export default function PlayerRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [playerName, setPlayerName] = useState<string>();

  const handleClick = () => {
    setPlayerName(inputRef.current?.value);
    console.log(inputRef.current);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <section className="text-center">
      <h2 className="text-[#54a399]">Welcome {playerName ?? "unknown entity"}</h2>
      <p className="flex items-center justify-center">
        <PlayerInput type="text" ref={inputRef} />
        <PlayerButton onClick={handleClick}>Set Name</PlayerButton>
      </p>
    </section>
  );
}
