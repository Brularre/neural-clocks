import { useContext } from 'react';
import { inputProps, selectProps } from '@/app/constants/formProps';
import { activityStyles } from '@/app/constants/activities';

// Contexts
import { AppContext } from '@/app/contexts/AppContext';
import { FormContext } from '../../providers/FormProvider';

// Components
import Heading from '../Heading/Heading';
import FormSelect from './FormSelect';
import FormInput from './FormInput';
import Button from '../Button/Button';

export default function TimerSettings() {
  const { users, setUsers, isTimeCounting, setTimeCounting } =
    useContext(AppContext);

  const { inputValues, errors } = useContext(FormContext);

  function isFormOk() {
    const isInputError = Object.values(errors).some((error) => error);
    return isInputError;
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setUsers([
      {
        ...users[0],
        initialTime: inputValues.time,
        time: inputValues.time,
        cycles: inputValues.cycles,
        activity: activityStyles[inputValues.activity],
        comment: inputValues.comment,
      },
      ...users.slice(1),
    ]);
    setTimeCounting(true);
  }

  return (
    <section
      className='px-10 py-5'
      id='settings'
      aria-label='Pick your settings'
    >
      <Heading text='Your Settings' />
      <form
        className='grid grid-cols-2 gap-8 pb-3'
        name='timer-form'
        id='timer-form'
        onSubmit={handleSubmit}
      >
        <div>
          <FormSelect {...selectProps.time} />
        </div>
        <div>
          <FormSelect {...selectProps.cycles} />
        </div>
        <div>
          <FormSelect {...selectProps.activity} />
        </div>
        <div>
          <FormInput {...inputProps.comment} />
        </div>
        <div className='col-span-2'>
          <Button text='Set timer' disabled={isFormOk() || isTimeCounting} />
        </div>
      </form>
    </section>
  );
}
