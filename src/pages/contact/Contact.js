import React from 'react'
import Header from "../../header/Header";
import { AppContext } from "../../App";
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive'

import icons from '../../assets/icons/icons';
import SocialMedia from '../about/components/SocialMedia';
import EmailForm from './components/EmailForm';

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
            <div className={!openMenu ? `container ` : `hidden`}>
                <div className={`${(isMdScreen || isLgScreen) ? `w-[60%]` : `w-full`} wrapper`}>
                    <div className={(isMdScreen || isLgScreen) ? `w-[90%] h-[90%] rounded-lg  flex flex-col justify-center` : `w-full h-full  rounded-lg `}>
                        <div className={`info-section ${(isMdScreen || isLgScreen) ? `justify-center ` : `justify-end`} `}>
                            <h1 className='contact-title'>
                                Contact
                            </h1>
                            <p className='paragraph-styling'>
                                Get in touch or shoot me an email directly on
                                <span className='email-styling'>
                                    bilal.benaouad@ump.ac.com
                                </span>
                            </p>
                        </div>
                        <div className='form-container'>

                            < EmailForm />
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
