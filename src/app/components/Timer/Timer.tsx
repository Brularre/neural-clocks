// Imports
import { useContext, useEffect, useState } from 'react';

// Hooks & Utils
import useInterval from '@/app/hooks/use-interval';
import { secondsToMinutes } from '../../utils/seconds-to-minutes';

// Contexts
import { AppContext } from '@/app/contexts/AppContext';

// Interfaces
import { User } from '@/app/constants/users';
import { shortRestTime } from '@/app/constants/timer';
import { activityStyles } from '@/app/constants/activities';

export default function Timer(props: User): JSX.Element {
  const {
    users,
    setUsers,
    timeUntilCollab,
    setTimeUntilCollab,
    isTimeCounting,
    updateUserProp,
  } = useContext(AppContext);

  // Uses custom hook useInterval and updates the current user's time (harcoded caveat for currentUser id)
  useInterval(
    () => {
      updateUserProp('time', props.time - 1, props.id);
      setTimeUntilCollab(timeUntilCollab - 1);
    },
    // If user's id is 1 (main user if you will) will count if not pauses, otherwise will count
    isTimeCounting && props.id === 1
      ? 1000
      : null || props.id !== 1
      ? 1000
      : null
  );

  useEffect(() => {
    // Prevents further updates if timer is still running
    if (props.time > 0) return;
    // If there are cycles remaining
    if (props.cycles > 0) {
      updateUserProp('cycles', props.cycles - 1, props.id);
      updateUserProp('time', props.initialTime, props.id);
      // If isWorking and no cycles remaining, triggers a long rest and updates the cycles of the user
    } else if (props.cycles <= 0) {
      updateUserProp('onBreak', true, props.id);
      updateUserProp('time', shortRestTime, props.id);
      updateUserProp('initialTime', shortRestTime, props.id);
      updateUserProp('activity', activityStyles['resting'], props.id);
      updateUserProp('comment', 'On Break', props.id);
      // If timer finishes and in Rest Mode, sets up a new work session
      if (props.onBreak && props.time <= 0) {
        updateUserProp('time', 1500, props.id);
        updateUserProp('cycles', 4, props.id);
        updateUserProp('activity', activityStyles['development'], props.id);
      }
    }
  }, [props.time, props.cycles, setUsers]);

  // Calculate the progress as a percentage

  let progress = (props.time / props.initialTime) * 100;

  return (
    <div className='flex items-center'>
      <div className='relative w-full h-6 bg-neutral-600 rounded-md overflow-hidden'>
        <div
          className={`absolute top-0 left-0 h-full ${props.activity.color}`}
          style={{ width: `${progress}%` }} // Set the width dynamically based on the progress
        ></div>
        <div className='absolute top-1 left-4 text-xs text-neutral-200'>
          {`${props.name} | ${props.activity.name} | ${
            props.comment
          } | ${secondsToMinutes(props.time)} x ${props.cycles}`}
        </div>
      </div>
    </div>
  );
}
