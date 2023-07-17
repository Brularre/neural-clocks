// Components
import Bio from './Bio/Bio';
import NavMenu from './NavMenu/NavMenu';

export default function Header() {
  return (
    <header className='lg:sticky lg:flex-1 lg:flex-col lg:max-h-screen lg:w-1/2 lg:justify-between'>
      <Bio />
      <NavMenu />
    </header>
  );
}
