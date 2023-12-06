// import React, { useEffect, useState } from 'react'
import './about.css'
import Header from '../../header/Header'
import profile from '../../assets/bben-aou.jpeg'
import Practicale from '../../header/components/Practicale'

import { AppContext } from "../../App";
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive'

import { useNavigate } from 'react-router-dom';


import Quote from './Quote';
import SocialMedia from './components/SocialMedia'

export default function About() {

    const navigate = useNavigate();

    const { openMenu } = useContext(AppContext);
    const isMdScreen = useMediaQuery({ minWidth: 768 });
    const isLgScreen = useMediaQuery({ minWidth: 1200 });
    const isXsScreen = useMediaQuery({ maxWidth: 375 });


    const handleBtnClick = () => {
        navigate('/contact');
    };


    return (
        <>
            <Header />
            <div className={!openMenu ? `main-about ` : `hidden`}>
                <div className={`w-full h-[20%] lg:w-[35%] md:w-full md:h-[20%]   lg:h-full  `}>
                    <div className=" w-full h-full md:h-full lg:h-3/5 2xl:h-1/2 flex flex-col justify-end lg:justify-end items-center  ">
                        <img src={profile} alt="profile" className=" custom-class shadow-profile  shadow-dark-600 dark:shadow-dark-500 animate-profile " />
                        {(isLgScreen) && <SocialMedia />}
                    </div>
                    {( isLgScreen) && <Quote
                        quoteContent={"“Learning is the only thing that the mind never gets tired of, is never afraid of and never regrets”"}
                        author={"Leonardo Da Vinci"}
                    />}
                </div>
                <div className='w-full h-[80%] md:w-full md:h-[80%] lg:h-full   flex flex-col lg:justify-center  '>
                    <div className={`w-full  h-full md:h-full lg:h-[70%]  px-[50px] 2xl:px-[70px] flex flex-col md:justify-center lg:justify-normal items-center  2xl:justify-evenly lg:pt-[45px]`}>
                        <div className={`w-full font-quote font-bold text-[3.5rem] 2xl:text-[5rem] flex items-end justify-center text-dark-900 dark:text-light-900 scale-up-center`}>
                            I'm Bilal
                        </div>
                        <p className={`w-full ${isXsScreen ? `leading-6 text-justify` : `leading-8 lg:leading-[2.5rem] 2xl:leading-10 text-center `}  font-roboto text-[1rem] lg:text-[1.2rem]  text-dark-900 dark:text-light-800 scale-up-center`}>
                            A passionate software engineer with over three years of dedicated study in the field. I thrive in front-end development but constantly seek opportunities to challenge myself with new technologies. When I'm not coding, you'll find me strumming the guitar, exploring new destinations, or camping with friends. With a thirst for knowledge and a drive for growth, I'm ready to take on new challenges and contribute to the ever-evolving world of IT.
                        </p>
                        <button className=' p-2 lg:p-0 w-[150px] md:h-[3rem] lg:h-[50px] bg-btn-900 dark:bg-dark-700 md:tracking-wider rounded-md mt-4 md:mt-6 font-roboto hover:bg-btn-800 transition duration-700 ease-in-out hover:scale-105 scale-up-center' onClick={handleBtnClick}>
                            Contact Me
                        </button>
                        {( isMdScreen && !isLgScreen) && <Quote
                        quoteContent={"“Learning is the only thing that the mind never gets tired of, is never afraid of and never regrets”"}
                        author={"Leonardo Da Vinci"}
                    />}
                        {(!isMdScreen && ! isLgScreen && !isXsScreen) && <SocialMedia />}
                    </div>
                </div>

                <Practicale />
            </div>
        </>
    )
}
