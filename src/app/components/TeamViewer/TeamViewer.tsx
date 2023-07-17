// Imports
import { useContext } from 'react';

// Contexts
import { AppContext } from '@/app/contexts/AppContext';

// Components
import Heading from '../Heading/Heading';
import Timer from '../Timer/Timer';
import Separator from '../Separator/Separator';

// Utils
import { secondsToMinutes } from '@/app/utils/seconds-to-minutes';

export default function TeamViewer() {
  const { users, timeUntilCollab } = useContext(AppContext);

  return (
    <section className='px-10 py-5' id='teamviewer' aria-label='TeamViewer'>
      <Heading text='Your team' />
      <div className='flex flex-col gap-3 pb-5'>
        {users.slice(1).map((user) => (
          <Timer key={user.id} {...user} />
        ))}
      </div>
      <Separator />
      <Heading text='Next Possible Collab' />
      <h3>{secondsToMinutes(timeUntilCollab)}</h3>
    </section>
  );
}
