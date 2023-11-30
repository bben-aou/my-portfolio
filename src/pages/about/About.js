import React from 'react'
import './about.css'
import Header from '../../header/Header'
import profile from '../../assets/bben-aou.jpeg'
import Practicale from '../../header/components/Practicale'

import { AppContext } from "../../App";
import { useContext } from 'react';

export default function About() {
    const { openMenu } = useContext(AppContext);

    return (
        <>
            <Header />
            <div className={!openMenu ? `main-about` : `hidden`}>
                <div className="w-full h-full  lg:h-[90%]  flex flex-col">
                    <div className=' w-full h-[27%]  flex items-center justify-center animate-show-up z-10'>
                        <img src={profile} alt="profile" className=" custom-class  shadow-profile order-1 shadow-dark-800 animate-profile  "></img>
                    </div>
                    <div className='w-full h-[77%] mt-[12px]'>
                        <div className='w-full  h-[15%] flex items-center justify-center text-[2rem] font-poppins font-semibold tracking-widest text-dark-800 pl-[20px] slide-top'>
                            So, Who Am I ?
                        </div>
                        <div className='   w-[70%] h-[85%]  mx-[15%] flex items-center justify-center'>
                            <div className='font-poppins text-dark-900 text-justify px-[10px]  font-normal text-[24px] slide-right'>
                                <span className='text-[25px] text-dark-800 font-bold '>{"<"}</span> I'm Bilal Ben Aouad, a passionate software engineer with over three years of dedicated study in the field. I thrive in front-end development but constantly seek opportunities to challenge myself with new technologies. When I'm not coding, you'll find me strumming the guitar, exploring new destinations, or camping with friends. With a thirst for knowledge and a drive for growth, I'm ready to take on new challenges and contribute to the ever-evolving world of IT. <span className=' text-[25px] font-bold text-dark-800'>{"/>"}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Practicale />
            </div>
        </>
    )
}
