import Link from 'next/link';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaYoutube} from 'react-icons/fa';
import Contact from './Contact';
import Download from './Download';
import Languages from './Languages';
import Location from './Location';
import Tools from './Tools';
import Skills from './Skills';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '../../../constants/constants';
import Osama from '../../../public/images/saad.jpg';

const Intro = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header: Profile image and name/designation (never scrolls) */}
      <div className='w-full flex-shrink-0 flex flex-col items-center bg-MidNightBlack backdrop-blur-sm pt-16 pb-3'>
        <Image className='w-20 h-20 rounded-full shadow-lg border-4 border-MidNightBlack' src={Osama} alt='profile picture' />
        <div className='flex flex-col items-center justify-center mt-2'>
          <span className='text-gray-300 text-base font-bold break-normal'>{NAME}</span>
          <span className='text-sm text-LightGray text-center mt-1'>{DESIGNATION}</span>
        </div>
      </div>

      {/* Scrollable middle content, with extra top padding for mobile */}
      <div className='flex-grow overflow-y-auto min-h-0 flex flex-col pt-4 space-y-4 divide-y divide-white overflow-x-hidden px-4 pb-16'>
        <Location />
        <Languages />
        <Skills />
        <Tools />
        <Contact />
        <Download icon={<FaDownload />} />
      </div>

      {/* Fixed footer with social links */}
      <div className='footer flex-shrink-0 flex justify-center space-x-6 text-xl items-center z-50 h-10 w-full bg-MidNightBlack text-Snow mt-auto'>
        <Link href={SOCIAL_LINKS.FACEBOOK} target='_blank' rel='noreferrer' className=''>
          <FaFacebook />
        </Link>
        <Link href={SOCIAL_LINKS.YOUTUBE} target='_blank' rel='noreferrer' className=''>
          <FaYoutube />
        </Link> 
        <Link href={SOCIAL_LINKS.GITHUB} target='_blank' rel='noreferrer' className=''>
          <FaGithub />
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel='noreferrer' className=''>
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
