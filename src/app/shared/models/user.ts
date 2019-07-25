export interface User {

  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  isAdmin?: boolean;
  isActivated?: boolean;

}
