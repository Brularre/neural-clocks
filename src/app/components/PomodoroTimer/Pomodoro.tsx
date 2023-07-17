// Imports
import { useContext } from 'react';

// Context
import { AppContext } from '@/app/contexts/AppContext';

// Components
import Timer from '../Timer/Timer';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

export default function PomodoroTimer(): JSX.Element {
  const { users, isTimeCounting, setTimeCounting } = useContext(AppContext);

  return (
    <section className='px-10 py-5' id='timer' aria-label='Your timer'>
      <Heading text='Your Timer' />

      <h2 className='py-5 text-xl'>
        You currently are:{' '}
        <span className='font-bold'>
          {isTimeCounting ? 'WORKING' : 'RESTING'}
        </span>
      </h2>
      {/* Sets Timer with the active user's settings  */}
      <Timer {...users[0]} />
      <div className='flex gap-4 py-6'>
        <Button
          text={isTimeCounting ? 'PAUSE' : 'CONTINUE'}
          onClick={() => setTimeCounting(!isTimeCounting)}
        />
      </div>
    </section>
  );
}
