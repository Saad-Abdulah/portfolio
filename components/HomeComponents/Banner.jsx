import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import { useEffect, useState } from 'react';
import styles from '../../styles/Banner.module.css'
const Banner = () => {
    const [introState, setIntroState] = useState(false);

    // Function to toggle the intro panel
    const toggleIntro = (e) => {
        e.preventDefault();
        
        // Create a custom event to communicate with layout.js
        const event = new CustomEvent('toggleIntroPanel', { detail: { open: true } });
        document.dispatchEvent(event);
        
        // Also handle the hash navigation (as backup)
        window.location.hash = '#intro';
    };

    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
                    <div className="flex items-center md:items-center md:justify-around">
                        <div className="">
                            <div className="">
                                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">Hello, Check This Out!</h1>
                            </div>
                            <div className="">
                                <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                                    <span>{"<"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                        {">"} <span className="text-Snow sm:text-xl xl:text-2xl font-bold"> I am <span className="inline-block">
                                            <Typewriter
                                                options={{
                                                    strings:
                                                        ['a MERN Stack Developer',
                                                            'a Software Engineer', 'an AI Enthusiast'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                        </span> {"</"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>{">"} </span>
                                </div>
                            </div>
                            <button onClick={toggleIntro} className={`button ${styles.blinking}`}>About me</button>
                        </div>
                        <div className="w-48 h-52 relative hidden md:block">
                            <img className='absolute top-8 w-full h-full' src="images/emoji.png" alt="emoji" />
                        </div>
                    </div>
                </div>

                {/* details in row */}
                <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>Completed Projects</span>
                    </div>

                    {/* <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>8+</span>
                        <span className='text-xs text-Snow'>Freelance Clients</span>
                    </div> */}

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>5+</span>
                        <span className='text-xs text-Snow'>Honors & Awards</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>Opensource Projects</span>
                    </div>

                </div>
            </div>
        </BannerLayout>
    )
}

export default Banner