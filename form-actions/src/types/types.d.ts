const formKeys = {
  email: "email",
  password: "password",
  confirmPassword: "confirm-password",
  firstName: "first-name",
  lastName: "last-name",
  role: "role",
  acquisition: "acquisition",
  terms: "terms"
} as const;

type SignupKeyTypes = keyof typeof formKeys;

type SignupType = Record<SignupKeyTypes, FormDataEntryValue | FormDataEntryValue[]>;
