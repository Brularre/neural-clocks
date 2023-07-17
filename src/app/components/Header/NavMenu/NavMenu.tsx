// Imports
import { navLinkProps } from '@/app/constants/header';

// Components
import NavLink from '../NavLink/NavLink';

export default function NavMenu() {
  return (
    <nav className='nav hidden lg:block' aria-label='In-page jump links'>
      <ul className='pt-16 w-max'>
        <NavLink {...navLinkProps.about} />
        <NavLink {...navLinkProps.experience} />
        <NavLink {...navLinkProps.projects} />
      </ul>
    </nav>
  );
}
