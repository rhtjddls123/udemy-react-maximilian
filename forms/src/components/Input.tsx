import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: boolean | string;
}
const Input = ({ label, id, error, ...props }: InputProps) => {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Input;
