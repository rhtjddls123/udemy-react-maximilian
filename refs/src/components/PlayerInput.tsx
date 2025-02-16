import { forwardRef, InputHTMLAttributes } from "react";

const PlayerInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ ...props }, ref) => {
    return (
      <input
        ref={ref}
        className="border border-solid border-[#54a399] bg-[#192f2b] rounded rounded-tr-none rounded-br-none p-1 text-[#d1f0ec]"
        {...props}
      ></input>
    );
  }
);

export default PlayerInput;
