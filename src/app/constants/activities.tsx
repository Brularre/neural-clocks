export type Activity = {
  name: string;
  color: string;
};

export const activityStyles: Record<string, Activity> = {
  development: {
    name: 'Development',
    color: 'bg-cyan-700',
  },
  design: {
    name: 'Design',
    color: 'bg-purple-700',
  },
  testing: {
    name: 'Testing / QA',
    color: 'bg-amber-700',
  },
  documentation: {
    name: 'Documentation',
    color: 'bg-orange-700',
  },
  meeting: {
    name: 'Meeting',
    color: 'bg-blue-700',
  },
  resting: {
    name: 'On Break',
    color: 'bg-green-700',
  },
  inactive: {
    name: 'Inactive',
    color: 'bg-slate-800',
  },
};
