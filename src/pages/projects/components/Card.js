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
import '../projects.css';
import React from 'react'

export default function Card({ title, description, img, technologies, githubPath }) {
    const IconComp = CPlain;

    return (
        <div  className="w-[17rem] 2xl:w-[18rem] 2xl:h-[22rem]  lg:w-[17rem] lg:h-[20rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-dark-400 transition duration-700 ease-in-out hover:scale-105 mx-2 scale-up-center">
            <img className="h-[45%] w-full bg-cover bg-center rounded-t-lg" src={img} alt="" />
            <div className="p-5 pt-[0.4rem] flex flex-col items-center">
                <h5 className="lg:mb-2 text-xl font-bold tracking-wide text-light-800  ">
                    {title}
                </h5>
                <p className="mb-1 font-normal  text-center text-[0.9rem] text-gray-200 dark:text-gray-400 ">
                    {description}
                </p>
                <div className='flex gap-1 lg:mt-[2px]'>
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
                <a href={githubPath} rel="noreferrer" target="_blank" className="w-[60%] inline-flex justify-center items-center px-3 py-2 lg:mt-1  text-sm font-medium text-center text-dark-900 bg-light-800 rounded-lg hover:bg-btn-700 hover:text-light-900 dark:hover:bg-dark-700">
                    source code
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
