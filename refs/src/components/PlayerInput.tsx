import { InputHTMLAttributes } from "react";

const PlayerInput = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="border border-solid border-[#54a399] bg-[#192f2b] rounded rounded-tr-none rounded-br-none p-1 text-[#d1f0ec]"
      {...props}
    ></input>
  );
};

export default PlayerInput;
