interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button(props: Props): JSX.Element {
  return (
    <button
      className='middle center rounded-lg bg-pink-700 py-3 px-6 text-xs font-semibold uppercase text-slate-200 transition-all hover:shadow-lg hover:shadow-pink-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
      data-ripple-light='true'
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
