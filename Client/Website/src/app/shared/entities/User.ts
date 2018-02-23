export class User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  gender: number;

  // define user type
  // 1 - for regular user
  // 2 - for manager user
  userType: string;
}
