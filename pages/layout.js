import Intro from '../components/Common/Intro';
import Nav from '../components/Common/Nav/Nav';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [intro, setIntro] = useState(false);

  // Make sure the intro panel is properly toggled
  const toggleIntro = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIntro(!intro);
    // Clear the hash when closing the intro
    if (intro) {
      window.location.hash = ''; // Clear the hash when closing
    } else {
      window.location.hash = '#intro'; // Set the hash when opening
    }
  };
  // Handle both hash changes and custom events
  useEffect(() => {
    // Function to force open the intro panel
    const forceOpenIntro = () => {
      setIntro(true);
      window.location.hash = '#intro'; // Set the hash when opening
    };

    // Function to handle hash changes
    const handleHash = () => {
      if (window.location.hash === '#intro') {
        forceOpenIntro();
      }
    };
    
    // Function to handle custom event from Banner component
    const handleCustomEvent = (e) => {
      if (e.detail && e.detail.open) {
        forceOpenIntro();
      } else {
        setIntro(false);
        window.location.hash = ''; // Clear the hash when closing
      }
    };
    
    // Check hash on initial load
    handleHash();
    
    // Add event listeners
    window.addEventListener('hashchange', handleHash);
    document.addEventListener('toggleIntroPanel', handleCustomEvent);
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('hashchange', handleHash);
      document.removeEventListener('toggleIntroPanel', handleCustomEvent);
    };
  }, []);

  return (
    <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}>
      <div className='lg:hidden'>
        <div className='bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative'>
          {/* Right corner button removed as requested */}
        </div>
      </div>
      <div className='flex relative h-full justify-between gap-x-3'>
        {/* left most side */}
        <div
          className={`w-64 bg-DeepNightBlack shadow-2xl z-50 lg:rounded-xl overflow-hidden lg:flex flex-col lg:relative ${
            intro ? 'flex absolute top-0 left-0 h-screen max-h-screen' : 'hidden'
          }`}>
          <Intro isOpen={intro} setIsOpen={setIntro} />
        </div>
        {/* overlay */}
        {intro && <div onClick={() => setIntro(false)} className='fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[2px] z-40'></div>}

        {/* middle of screen */}
        <div className='w-full h-auto lg:w-9/12 shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar'>{children}</div>
      </div>
      <Nav />
    </div>
  );
}
