import { FormEvent, useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  const [enteredValue, setEnteredValue] = useState<LoginType>({
    email: "",
    password: ""
  });

  const [didEdit, setDidEdit] = useState<Record<LoginKeyTypes, boolean>>({
    email: false,
    password: false
  });

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@");
  const passwordIsInvalid = didEdit.password && enteredValue.password.trim().length < 8;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDidEdit({ email: true, password: true });

    if (enteredValue.email === "" || enteredValue.password === "") {
      return;
    }

    setEnteredValue({ email: "", password: "" });
    setDidEdit({ email: false, password: false });
    console.log(enteredValue);
  };

  const handleInputChange = (identifier: LoginKeyTypes, value: LoginType[LoginKeyTypes]) => {
    setEnteredValue((prev) => ({ ...prev, [identifier]: value }));
    setDidEdit((prev) => ({ ...prev, [identifier]: false }));
  };

  const handleInputBlur = (identifier: LoginKeyTypes) => {
    setDidEdit((prev) => ({ ...prev, [identifier]: true }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => {
            handleInputChange("email", e.target.value);
          }}
          value={enteredValue.email}
          error={emailIsInvalid && "Please enter a valid email address!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => {
            handleInputChange("password", e.target.value);
          }}
          value={enteredValue.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
