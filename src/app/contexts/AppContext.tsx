'use client';

import { createContext } from 'react';
import { Activity } from '../constants/activities';
import { User } from '../constants/users';

interface AppContextType {
  users: User[];
  setUsers: (value: User[]) => void;
  timeUntilCollab: number;
  setTimeUntilCollab: (value: number) => void;
  isTimeCounting: boolean;
  setTimeCounting: (value: boolean) => void;
  updateUserProp: (
    propName: keyof User,
    propValue: any,
    userId: number
  ) => void;
}

export const AppContext = createContext<AppContextType>({
  users: [],
  setUsers: () => {},
  timeUntilCollab: 0,
  setTimeUntilCollab: () => {},
  isTimeCounting: false,
  setTimeCounting: () => {},
  updateUserProp: () => {},
});
