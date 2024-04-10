
export interface User {
  id: number;
  email: string;
  password: string;
  addressStreet: string;
  // addressPostalCode
  // addressCity
  // addressCountry
  phone: string;
  role: Role;
}
export enum Role {
  USER = 'user',
  ADMIN = 'admin'
}
