import { Activity, activityStyles } from './activities';

export type User = {
  id: number;
  name: string;
  activity: Activity;
  comment: string;
  initialTime: number;
  time: number;
  cycles: number;
  onBreak: boolean;
};

export const userProps: User[] = [
  {
    id: 1,
    name: 'John',
    activity: activityStyles.development,
    comment: 'Working on the new Chat Component',
    initialTime: 1500,
    time: 1500,
    cycles: 3,
    onBreak: false,
  },
  {
    id: 2,
    name: 'Ray',
    activity: activityStyles.testing,
    comment: 'Checking the bug in shopping cart',
    initialTime: 1500,
    time: 468,
    cycles: 3,
    onBreak: false,
  },
  {
    id: 3,
    name: 'Elise',
    activity: activityStyles.development,
    comment: 'Refactoring the Nav',
    initialTime: 1500,
    time: 1200,
    cycles: 2,
    onBreak: false,
  },
  {
    id: 4,
    name: 'Emile',
    activity: activityStyles.documentation,
    comment: 'Fixing typos in the Readme...',
    initialTime: 1500,
    time: 1200,
    cycles: 2,
    onBreak: false,
  },
  {
    id: 5,
    name: 'Bruno',
    activity: activityStyles.design,
    comment: 'Working on the logo',
    initialTime: 1500,
    time: 1340,
    cycles: 1,
    onBreak: false,
  },
  {
    id: 6,
    name: 'Alex',
    activity: activityStyles.meeting,
    comment: 'In a meeting with Sandra',
    initialTime: 1500,
    time: 942,
    cycles: 4,
    onBreak: false,
  },
  {
    id: 7,
    name: 'Bea',
    activity: activityStyles.development,
    comment: 'Helping Elise with Nav',
    initialTime: 1500,
    time: 1200,
    cycles: 2,
    onBreak: false,
  },

  {
    id: 8,
    name: 'Nat',
    activity: activityStyles.testing,
    comment: 'Doing Maintenance',
    initialTime: 1500,
    time: 35,
    cycles: 0,
    onBreak: false,
  },
];
