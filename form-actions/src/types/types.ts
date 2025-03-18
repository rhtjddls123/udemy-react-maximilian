export const formKeys = {
  email: "email",
  password: "password",
  confirmPassword: "confirm-password",
  firstName: "first-name",
  lastName: "last-name",
  role: "role",
  acquisition: "acquisition",
  terms: "terms"
} as const;

export type SignupKeyTypes = keyof typeof formKeys;

export type SignupType = Record<SignupKeyTypes, FormDataEntryValue | FormDataEntryValue[]>;
