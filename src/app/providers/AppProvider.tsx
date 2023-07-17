// Imports
import { useState, useEffect, useRef, useCallback } from 'react';
import { AppContext } from '../contexts/AppContext';

// Types & Constants
import { Activity, activityStyles } from '@/app/constants/activities';
import { User, userProps } from '@/app/constants/users';
import { longRestTime, shortRestTime } from '@/app/constants/timer';

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // User's Timer Settings (for this exercise we will set some data to act as a database)
  const [users, setUsers] = useState<User[]>(userProps);

  // Other team users also hardcoded to act as a database
  const [teamMembers, setTeamMembers] = useState<User[]>(users.slice(1));
  const [timeUntilCollab, setTimeUntilCollab] = useState<number>(
    calculateTimeUntilCollab()
  );

  // Timer States
  const [isTimeCounting, setTimeCounting] = useState<boolean>(false);

  useEffect(() => {
    setTimeUntilCollab(calculateTimeUntilCollab());
  }, []);

  function calculateTimeUntilCollab() {
    const collabTimes = users
      .slice(1) // Exclude the current user from the calculation
      .map((user) => user.time * user.cycles);
    const remainingTime = collabTimes.reduce((total, time) => total + time, 0);
    return Math.max(remainingTime, 0);
  }

  const updateUserProp = (propName: string, propValue: any, userId: number) => {
    setUsers((prevUsers: User[]) => {
      return prevUsers.map((user: User) => {
        if (user.id === userId) {
          return {
            ...user,
            [propName]: propValue,
          };
        }
        return user;
      });
    });
  };
  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        timeUntilCollab,
        setTimeUntilCollab,
        isTimeCounting,
        setTimeCounting,
        updateUserProp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
