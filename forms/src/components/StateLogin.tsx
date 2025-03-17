import { FormEvent, useState } from "react";

export default function StateLogin() {
  const [enteredValue, setEnteredValue] = useState<LoginValueType>({ email: "", password: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(enteredValue);
  };

  const handleInputChange = (
    identifier: keyof LoginValueType,
    value: LoginValueType[keyof LoginValueType]
  ) => {
    setEnteredValue((prev) => ({ ...prev, [identifier]: value }));
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
            onChange={(e) => {
              handleInputChange("email", e.target.value);
            }}
            value={enteredValue.email}
          />
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
