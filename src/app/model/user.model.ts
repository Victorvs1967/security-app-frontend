import { Roles } from "./roles.model";

export class User {
  username?: string;
  password?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  onCreate?: Date;
  onUpdate?: Date;
  role?: Roles;
}