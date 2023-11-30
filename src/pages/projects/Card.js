import { CPlain } from 'devicons-react'
import { CplusplusOriginal } from 'devicons-react';
import { TypescriptOriginal } from 'devicons-react';
import { ReactOriginalWordmark } from 'devicons-react';
import { TailwindcssPlain } from 'devicons-react';
import { ReduxOriginal } from 'devicons-react';
import { SocketioOriginal } from 'devicons-react';
import { NextjsLine } from 'devicons-react';
import { DockerOriginal } from 'devicons-react';
import { Html5OriginalWordmark } from 'devicons-react';
import { Css3OriginalWordmark } from 'devicons-react';

import React from 'react'
import icons from '../../assets/icons/icons'

export default function Card({title, description, img, technologies}) {
    const IconComp = CPlain;
    
    return (
        <div className="w-[17rem] h-[19rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-[#1e293b] hover:shadow-xl transition-shadow duration-300 ease-in-out mx-3">
            <img className="h-[45%] w-full bg-cover bg-center rounded-t-lg" src={img} alt="" />
            <div className="p-5 pt-[0.4rem] flex flex-col items-center">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                    {title}
                </h5>
                <p className="mb-1 font-normal  text-center text-[0.9rem] text-gray-700 dark:text-gray-400 ">
                    {description}
                </p>
                <div className='flex gap-1'>
                   
                    <IconComp size={24} color="white" className={`mb-2 ${(technologies === "lowLevel") ? "" : "hidden"}`} />
                    <CplusplusOriginal size={24} color="white" className={`mb-2 ${technologies === "C++" ? "" : "hidden"}`} /> 
                    <TypescriptOriginal size={24} color="white" className={`mb-2 ${technologies === "Web" ? "" : "hidden"}`} /> 
                    <ReactOriginalWordmark size={24} color="white" className={`mb-2 ${technologies === "Web" ? "" : "hidden"}`} /> 
                    <TailwindcssPlain size={24} color="white" className={`mb-2 ${technologies === "Web" ? "" : "hidden"}`} /> 
                    <ReduxOriginal size={24} color="white" className={`mb-2 ${technologies === "Web" ? "" : "hidden"}`} /> 
                    <SocketioOriginal size={24} color="white" className={`mb-2 ${technologies === "Web" ? "" : "hidden"}`} /> 
                    <NextjsLine size={24} color="white" className={`mb-2 ${technologies === "Web" ? "" : "hidden"}`} /> 
                    <DockerOriginal size={24} color="white" className={`mb-2 ${technologies === "Docker" ? "" : "hidden"}`} />
                    <Html5OriginalWordmark size={24} color="white" className={`mb-2 ${technologies === "Basic" ? "" : "hidden"}`} />
                    <Css3OriginalWordmark size={24} color="white" className={`mb-2 ${technologies === "Basic" ? "" : "hidden"}`} />
                </div>
                <a href="github.com/bben-aou" className="w-[60%] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    source code
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
