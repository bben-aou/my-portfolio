import React, { useEffect, useState } from 'react'
import './about.css'
import Header from '../../header/Header'
import profile from '../../assets/bben-aou.jpeg'
import Practicale from '../../header/components/Practicale'

import { AppContext } from "../../App";
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive'

import Quote from './Quote';
import SocialMedia from './components/SocialMedia'

export default function About() {
    const { openMenu } = useContext(AppContext);
    const isMdScreen = useMediaQuery({ minWidth: 768 });
    const isLgScreen = useMediaQuery({ minWidth: 1200 });
    const [showSocialMedia, setShowSocialMedia] = useState(true);

    useEffect(() => {
        if (isMdScreen || isLgScreen)
            setShowSocialMedia(false);
    }, [isLgScreen, isMdScreen])



    return (
        <>
            <Header />
            <div className={!openMenu ? `main-about ` : `hidden`}>
                <div className='w-[35%] h-full  '>
                    {(!isMdScreen && !isLgScreen) && <div className=" w-full bg-red-600">1</div>}
                    <div className=" w-full h-3/5 flex flex-col justify-end items-center">
                        <img src={profile} alt="profile" className=" custom-class shadow-profile  shadow-[#445964b0] animate-profile " />
                        <SocialMedia />
                    </div>
                    <Quote
                        quoteContent={"“Learning is the only thing that the mind never gets tired of, is never afraid of and never regrets”"}
                        author={"Leonardo Da Vinci"}
                    />
                </div>
                <div className='w-full h-full  flex flex-col justify-center'>
                    <div className='w-full h-[70%]  px-[50px] flex flex-col items-center pt-[45px]'>
                        <div className='w-full  font-quote font-bold text-[3.5rem] flex items-end justify-center text-dark-900'>
                            I'm Bilal
                        </div>
                        <p className='w-full text-center font-roboto text-[1.2rem] text-dark-900 leading-16'>
                            A passionate software engineer with over three years of dedicated study in the field. I thrive in front-end development but constantly seek opportunities to challenge myself with new technologies. When I'm not coding, you'll find me strumming the guitar, exploring new destinations, or camping with friends. With a thirst for knowledge and a drive for growth, I'm ready to take on new challenges and contribute to the ever-evolving world of IT.
                        </p>
                        <button className='w-[150px] h-[50px] bg-[#3E2938] rounded-md mt-[1rem] font-roboto hover:bg-[#414B59] transition duration-700 ease-in-out hover:scale-105 '>
                            Contact Me
                        </button>
                    </div>
                </div>

                <Practicale />
            </div>
        </>
    )
}
