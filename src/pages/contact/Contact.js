import React from 'react'
import Header from "../../header/Header";
import { AppContext } from "../../App";
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive'

import icons from '../../assets/icons/icons';
import SocialMedia from '../about/components/SocialMedia';
import EmailForm from './EmailForm';

import './contact.css';

export default function Contact() {
    const { openMenu } = useContext(AppContext);

    const isMdScreen = useMediaQuery({ minWidth: 768 });
    const isLgScreen = useMediaQuery({ minWidth: 1200 });
    const isXsScreen = useMediaQuery({ maxWidth: 375 });

    const showSocialMedia = !isLgScreen && !isMdScreen && !isXsScreen;

    return (
        <>
            <Header />
            <div class={!openMenu ? `w-full h-[92vh] lg:h-[88vh] lg:px-[50px] flex ` : `hidden`}>
                <div className={` h-full ${(isMdScreen || isLgScreen) ? `w-[60%]` : `w-full`} flex items-center justify-center `}>
                    <div className={(isMdScreen || isLgScreen) ? `w-[90%] h-[90%] rounded-lg  flex flex-col justify-center` : `w-full h-full  rounded-lg `}>
                        <div className={`w-full  h-[25%] md:h-[20%] 2xl:h-[30%]   ${(isMdScreen || isLgScreen) ? `justify-center ` : `justify-end`} justify-center flex flex-col items-center `}>
                            <h1 className=' text-[1.4rem] lg:text-[2rem] 2xl:text-[3rem] 2xl:tracking-wide font-semibold font-roboto text-dark-900 tracking-[0.5px] dark:text-light-900 slide-top'>
                                Contact
                            </h1>
                            <p className='lg:text-right text-center text-dark-800 text-[0.8rem] lg:text-[1rem] font-normal font-roboto lg:mt-2 2xl:mt-4  dark:text-light-800 slide-right'>
                                Get in touch or shoot me an email directly on <span className='text-dark-900 dark:text-light-800 font-semibold transition duration-700 ease-in-out email-animation'> bilal.benaouad@ump.ac.com </span>
                            </p>
                        </div>
                        <div className='w-full h-[75%] md:h-[50%] lg:h-[60%]  2xl:h-[70%] 2xl:justify-start flex flex-col md:justify-center px-[50px] '>

                            < EmailForm/>
                            {
                               showSocialMedia &&
                                <div className='w-full h-[20%] flex items-end'>
                                    <SocialMedia />
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {
                    (isMdScreen || isLgScreen) &&
                    <div className='w-[40%] md:pr-[5px] lg:pr-0 h-full flex items-center '>
                        <img src={icons.contactVector} alt='' className='scale-up-center' />
                    </div>
                }
            </div>
        </>
    )
}
