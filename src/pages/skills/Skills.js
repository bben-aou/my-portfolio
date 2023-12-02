import React from 'react'
import './skills.css'
import Header from "../../header/Header";
import { AppContext } from "../../App";
import { useContext } from 'react';

import { CPlain } from 'devicons-react'
import { CplusplusPlain } from 'devicons-react';
import { JavascriptOriginal } from 'devicons-react';
import { TypescriptPlain } from 'devicons-react';
import { Html5OriginalWordmark } from 'devicons-react';
import { Css3OriginalWordmark } from 'devicons-react';
import { TailwindcssPlain } from 'devicons-react';
import { ReactOriginalWordmark } from 'devicons-react';
import { NextjsLine } from 'devicons-react';
import { SocketioOriginal } from 'devicons-react';
import { ReduxOriginal } from 'devicons-react';
import { DockerOriginalWordmark } from 'devicons-react';
import { FigmaOriginal } from 'devicons-react';
import { GithubOriginalWordmark } from 'devicons-react';


export default function Skills() {
  const { openMenu } = useContext(AppContext);

  return (
    <>
      <Header />
      <div class={!openMenu ? `w-full h-[92vh] lg:h-[88vh] lg:px-[50px] flex flex-col items-center justify-evenly` : `hidden`}>
  
         <div className="w-full h-1/3 mt-[15px]  flex flex-col items-center justify-center  lg:justify-end ">
                    <h1 className=" text-[2rem] lg:text-[3.4rem] font-black font-roboto text-dark-900 slide-top">
                      My Skills
                    </h1>
                    <p className=" lg:text-right text-center text-dark-800 text-[0.8rem] lg:text-[1.1rem] font-normal font-roboto px-2 lg:px-0 lg:mb-[15px] mt-2 slide-right">
                      The skills, tools and technologies I am really good at
                    </p>
                </div>


        <div className='w-full  h-2/3 grid grid-cols-3 lg:grid-cols-7 place-content-evenly	place-items-center py-2'>

          <CPlain size={90} color="#151515" className='scale-up-center'/>
          <CplusplusPlain size={90} color='#0E2954' className='scale-up-center' />
          <Html5OriginalWordmark size={90}  className='scale-up-center' />
          <Css3OriginalWordmark size={90}  className='scale-up-center' />
          <TailwindcssPlain size={90} className='scale-up-center' />
          <JavascriptOriginal size={90}  className='scale-up-center' />
          <TypescriptPlain size={90} className='scale-up-center' />
          <ReactOriginalWordmark size={90}  className='scale-up-center' />
          <NextjsLine size={90}  className='scale-up-center' />
          <SocketioOriginal size={90}  className='scale-up-center' />
          <ReduxOriginal size={90}  className='scale-up-center' />
          <DockerOriginalWordmark size={90}  className='scale-up-center' />
          <FigmaOriginal size={90}  />
          <GithubOriginalWordmark size={90} className='scale-up-center'  />
         


        </div>
      </div>
    </>
  )
}
