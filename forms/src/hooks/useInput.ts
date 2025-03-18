import { useState } from "react";

export function useInput<T>(defaultValue: T, validationFn: (value: T) => boolean) {
  const [enteredValue, setEnteredValue] = useState<T>(defaultValue);
  const [didEdit, setDidEdit] = useState<boolean>(false);

  const valueIsVaild = validationFn(enteredValue);

  const handleInputChange = (value: T) => {
    setEnteredValue(value);
    setDidEdit(false);
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !valueIsVaild
  };
}
