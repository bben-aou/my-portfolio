import React, { useEffect, useState } from 'react'
import './about.css'
import Header from '../../header/Header'
import profile from '../../assets/bben-aou.jpeg'
import Practicale from '../../header/components/Practicale'

import { AppContext } from "../../App";
import { useContext } from 'react';
import icons from '../../assets/icons/icons'
import { useMediaQuery } from 'react-responsive'
import urlSocialMedia from '../../header/components/sides/socialMediaData'

export default function About() {
    const { openMenu } = useContext(AppContext);
    const isMdScreen = useMediaQuery({ minWidth: 768 });
    const isLgScreen = useMediaQuery({ minWidth: 1200 });
    const [showSocialMedia, setShowSocialMedia] = useState(true);

    useEffect(() => {
        if (isMdScreen || isLgScreen)
            setShowSocialMedia(false);
    }, [isLgScreen, isMdScreen])

    const handleLinkedInClick = (socialMediaUrl) => {
        window.open(socialMediaUrl, '_blank');
    };

    return (
        <>
            <Header />
            <div className={!openMenu ? `main-about` : `hidden`}>
                <div className="w-full h-full  lg:h-[90%]  flex flex-col">
                    <div className=' w-full h-[22%]  lg:h-[27%]   flex items-center justify-center animate-show-up z-10'>
                        <img src={profile} alt="profile" className=" custom-class shadow-profile order-1 shadow-dark-800 animate-profile "></img>
                    </div>
                    <div className='w-full  h-[78%] lg:h-[77%] mt-[12px]'>
                        <div className='w-full  h-[15%] flex lg:items-center justify-center text-[1.7rem] lg:text-[2rem] font-poppins font-semibold tracking-widest text-dark-800 pl-[20px] slide-top'>
                            So, Who Am I ?
                        </div>
                        <div className=' lg:w-[70%] lg:h-[85%]  mx-[1.2rem] lg:mx-[15%] flex items-center justify-center'>
                            <div className='font-poppins text-dark-900 text-justify lg:px-[10px] font-normal text-[0.9rem] lg:text-[1.5rem] slide-right'>
                                <span className='lg:text-[1.5rem] text-dark-800 font-bold '>
                                    {"<"}</span> I'm Bilal Ben Aouad, a passionate software engineer with over three years of dedicated study in the field. I thrive in front-end development but constantly seek opportunities to challenge myself with new technologies. When I'm not coding, you'll find me strumming the guitar, exploring new destinations, or camping with friends. With a thirst for knowledge and a drive for growth, I'm ready to take on new challenges and contribute to the ever-evolving world of IT. <span className=' lg:text-[1rem] font-bold text-dark-800'>{"/>"}
                                </span>
                                {showSocialMedia && <div className='h-[50px] mt-[50px] flex justify-center items-center gap-4'>
                                    <img src={icons.inIcon} alt="linked-in" className="w-[27px] h-[27px] hover:scale-110 transition duration-700 ease-in-out cursor-pointer" onClick={() => handleLinkedInClick(urlSocialMedia[0].url)} />
                                    <img src={icons.gitIcon} alt="github" className="w-[27px] h-[27px]  hover:scale-110 transition duration-700 ease-in-out cursor-pointer" onClick={() => handleLinkedInClick(urlSocialMedia[1].url)} />
                                    <img src={icons.igIcon} alt="instagram" className=" w-[27px] h-[27px] mb-[-2px] hover:scale-110 transition duration-700 ease-in-out cursor-pointer" onClick={() => handleLinkedInClick(urlSocialMedia[2].url)} />
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Practicale />
            </div>
        </>
    )
}
