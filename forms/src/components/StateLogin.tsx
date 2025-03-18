import { FormEvent, useState } from "react";

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(e) => {
              handleInputChange("email", e.target.value);
            }}
            value={enteredValue.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => {
              handleInputChange("password", e.target.value);
            }}
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
