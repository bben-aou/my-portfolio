// import React, { useEffect, useState } from 'react'
import './about.css'
import Header from '../../header/Header'
import profile from '../../assets/bben-aou.jpeg'
import Practicale from '../../header/components/Practicale'

import { AppContext } from "../../App";
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive'

import { useNavigate } from 'react-router-dom';


import Quote from './components/Quote';
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
                <div className={`personnel-info-section`}>
                    <div className="img-wrapper">
                        <img src={profile} alt="profile" className="img-styling" />
                        {(isLgScreen) && <SocialMedia />}
                    </div>
                    {
                        (isLgScreen)
                        &&
                        <Quote
                            quoteContent={"“Learning is the only thing that the mind never gets tired of, is never afraid of and never regrets”"}
                            author={"Leonardo Da Vinci"}
                        />
                    }
                </div>
                <div className='personnel-description-section z-50'>
                    <div className={`personnel-description-section-wrapper`}>
                        <div className={`name-styling`}>
                            I'm Bilal
                        </div>
                        <p className={`w-full ${isXsScreen ? `leading-6 text-justify` : `leading-8 lg:leading-[2.5rem] 2xl:leading-10 text-center `} description-styling`}>
                            A passionate software engineer with over three years of dedicated study in the field. I thrive in front-end development but constantly seek opportunities to challenge myself with new technologies. When I'm not coding, you'll find me strumming the guitar, exploring new destinations, or camping with friends. With a thirst for knowledge and a drive for growth, I'm ready to take on new challenges and contribute to the ever-evolving world of IT.
                        </p>
                        <button className='contact-me-btn-styling' onClick={handleBtnClick}>
                            Contact Me
                        </button>
                        {
                            (isMdScreen && !isLgScreen)
                            &&
                            <Quote
                                quoteContent={"“Learning is the only thing that the mind never gets tired of, is never afraid of and never regrets”"}
                                author={"Leonardo Da Vinci"}
                            />
                        }
                        {
                            (!isMdScreen && !isLgScreen && !isXsScreen)
                            &&
                            <SocialMedia />
                        }
                    </div>
                </div>

                <Practicale />
            </div>
        </>
    )
}
