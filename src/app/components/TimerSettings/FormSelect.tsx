import { useContext } from 'react';
import { FormContext } from '../../providers/FormProvider';

export default function FormInput(props: any) {
  const { inputValues, setInputValues } = useContext(FormContext);

  function handleInputChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  return (
    <div className='relative h-10'>
      <select
        name={props.name}
        id={props.name}
        className='peer h-full w-full rounded-[7px] border border-slate-500 border-t-transparent bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-600 focus:border-2 focus:border-pink-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-slate-50 text-slate-500'
        onChange={handleInputChange}
        required
      >
        {props.options}
      </select>
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-500">
        {props.label}
      </label>
    </div>
  );
}
