export const USER_ROLES = [
  "ADMIN",
  "REGULAR"
];

export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
