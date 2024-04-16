

export interface User {
  id: number;
  email: string;
  password: string;
  phone: string;
  addressStreet: string;
  photoUrl: string;
  role: Role;
}
export enum Role {
  USER = 'user',
  ADMIN = 'admin'
}
