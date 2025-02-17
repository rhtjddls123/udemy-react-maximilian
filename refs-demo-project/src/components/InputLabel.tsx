import { InputHTMLAttributes, Ref, TextareaHTMLAttributes } from "react";

interface InputLabelProps {
  title: string;
  InputType?: "input" | "textarea";
  ref?: Ref<HTMLInputElement | HTMLTextAreaElement>;
}

type InputElementProps<T extends "input" | "textarea"> = T extends "input"
  ? InputHTMLAttributes<HTMLInputElement>
  : TextareaHTMLAttributes<HTMLTextAreaElement>;

const InputLabel = <T extends "input" | "textarea">({
  title,
  InputType = "input",
  ...props
}: InputLabelProps & InputElementProps<T>) => {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500" htmlFor={title}>
        {title}
      </label>
      {InputType === "input" && (
        <InputType
          className={classes}
          id={title}
          type="text"
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {InputType === "textarea" && (
        <InputType
          className={classes}
          id={title}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      )}
    </p>
  );
};

export default InputLabel;
