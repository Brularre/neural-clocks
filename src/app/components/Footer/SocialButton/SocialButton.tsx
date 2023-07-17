// Imports
import { SocialIcon } from '@/app/utils/interfaces';

export default function SocialButton(props: SocialIcon) {
  return (
    <li className='mr-5 text-xs'>
      <a
        className='block hover:text-slate-300'
        href={props.link}
        target='_blank'
        rel='noreferrer'
      >
        <span className='sr-only'>{props.name}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox={props.viewBox}
          fill='rgb(71 85 105)'
          className='h-6 w-6 hover:fill-current'
          aria-hidden='true'
        >
          <path d={props.path}></path>
        </svg>
      </a>
    </li>
  );
}
