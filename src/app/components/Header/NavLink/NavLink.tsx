// Imports
import { NavLink } from '@/app/utils/interfaces';

export default function NavLink(props: NavLink) {
  return (
    <li>
      <a className='group flex items-center py-3' href={props.link}>
        <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
        <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
          {props.name}
        </span>
      </a>
    </li>
  );
}
