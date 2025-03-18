type SignupKeyTypes =
  | "email"
  | "password"
  | "confirm-password"
  | "first-name"
  | "last-name"
  | "role"
  | "acquisition"
  | "terms";

type SignupType = Record<SignupKeyTypes, FormDataEntryValue | FormDataEntryValue[]>;
