import { ReactNode } from 'react';

export interface IUser {
  name: string;
  username: string;
  email: string;
}

interface UserData {
  id: string;
  name: string;
  type: string;
}

export interface UserContextData {
  users: Array<UserData>;
  updateUserTypeSuccess: boolean;
  getUsers(): void;
  clearUpdateStatus(): void;
  updateUserType(credentials: { id: string; userType: string }): void;
}

export interface UserProviderProps {
  children: ReactNode;
}
