const inputProps = {
  comment: {
    label: "Tell your team what you'll be doing",
    type: 'text',
    name: 'comment',
    placeholder: 'Add something meaninful',
    minLength: '5',
    maxLength: '75',
    isRequired: true,
  },
};

const selectProps = {
  time: {
    label: 'How many minutes',
    name: 'time',
    options: (
      <>
        <option>Choose</option>
        <option value='900'>15 minutes</option>
        <option value='1200'>20 minutes</option>
        <option value='1500'>25 minutes</option>
        <option value='1800'>30 minutes</option>
      </>
    ),
  },
  cycles: {
    label: 'Choose your cycles',
    name: 'cycles',
    options: (
      <>
        <option>Choose</option>
        <option value='2'>2 cycles</option>
        <option value='4'>4 cycles</option>
        <option value='6'>6 cycles</option>
        <option value='8'>8 cycles</option>
        <option value='10'>10 cycles</option>
      </>
    ),
  },
  activity: {
    label: 'Select activity',
    name: 'activity',
    options: (
      <>
        <option>Choose</option>
        <option value='development'>Development</option>
        <option value='design'>Design</option>
        <option value='testing'>Testing / QA</option>
        <option value='documentation'>Documentation</option>
        <option value='meeting'>A Meeting</option>
      </>
    ),
  },
};

export { inputProps, selectProps };
