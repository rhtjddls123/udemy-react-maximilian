import { FormEvent } from "react";
import Input from "./Input";
import { useInput } from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordVaule,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError
  } = useInput("", (value) => hasMinLength(value, 8));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleEmailBlur();
    handlePasswordBlur();

    if (!isNotEmpty(emailValue) || !isNotEmpty(passwordVaule)) {
      return;
    }

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordVaule);
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
          onBlur={handleEmailBlur}
          onChange={(e) => handleEmailChange(e.target.value)}
          value={emailValue}
          error={emailHasError && "Please enter a valid email address!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={(e) => {
            handlePasswordChange(e.target.value);
          }}
          value={passwordVaule}
          error={passwordHasError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
