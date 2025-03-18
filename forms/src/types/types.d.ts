type LoginType = Record<LoginKeyTypes, string>;

type LoginKeyTypes = "email" | "password";

type SignupKeyTypes =
  | "email"
  | "password"
  | "confirm-password"
  | "first-name"
  | "last-name"
  | "role"
  | "acquisition"
  | "terms-and-conditions";
