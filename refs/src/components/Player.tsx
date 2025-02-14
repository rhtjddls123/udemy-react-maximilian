import { ChangeEvent, useState } from "react";
import PlayerInput from "./PlayerInput";
import PlayerButton from "./PlayerButton";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubmitted(false);
    setEnteredPlayerName(e.target.value);
  };

  const handleClick = () => {
    setSubmitted(true);
  };

  return (
    <section className="text-center">
      <h2 className="text-[#54a399]">Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p className="flex justify-center items-center">
        <PlayerInput type="text" value={enteredPlayerName} onChange={handleChange} />
        <PlayerButton onClick={handleClick}>Set Name</PlayerButton>
      </p>
    </section>
  );
}
