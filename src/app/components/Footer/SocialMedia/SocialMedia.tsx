// Imports
import { socialIconProps } from '@/app/constants/header';

// Components
import SocialButton from '../SocialButton/SocialButton';

export default function SocialMedia() {
  return (
    <ul className='ml-1 mt-8 items-center flex' aria-label='Social Media'>
      <SocialButton {...socialIconProps.github} />
      <SocialButton {...socialIconProps.instagram} />
      <SocialButton {...socialIconProps.linkedIn} />
    </ul>
  );
}
