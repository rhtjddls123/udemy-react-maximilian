type LoginType = Record<LoginKeyTypes, string | number>;

type LoginKeyTypes = "email" | "password";

type SignupKeyTypes =
  | "email"
  | "password"
  | "first-name"
  | "last-name"
  | "role"
  | "acquisition"
  | "terms-and-conditions";
