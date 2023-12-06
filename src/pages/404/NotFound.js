import React from 'react'
import icons from '../../assets/icons/icons';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import Header from '../../header/Header';
import './notFound.css';

export default function NotFound() {

    const isMdScreen = useMediaQuery({ minWidth: 768 });
    const isLgScreen = useMediaQuery({ minWidth: 1200 });

    const errorDescription = (isMdScreen || isLgScreen)
        ? " The page you're looking for doesn't exist or has been removed !"
        : "Page Not Found !"
    return (
        <>
            < Header />
            <div className='w-full h-[92vh] lg:h-[88vh] lg:px-[50px] flex items-center justify-center'>
                <div className='w-[70%] h-[70%] lg:w-[80%] lg:h-[80%] '>
                    <div className='w-full h-[40%] md:h-[50%] lg:h-[60%]  flex items-end lg:items-center justify-center'>
                        <img src={icons.notFound} alt='' className='w-full h-[75%] lg:h-full ' />
                    </div>
                    <div className='w-full h-[60%] md:h-[50%] lg:h-[40%] '>
                        <div className='w-full h-[70%] '>
                            <h1 className='w-full h-[30%] md:h-[40%] lg:h-[50%] dark:text-light-900  flex items-center justify-center text-[2.5rem] md:text-[4rem] text-dark-900'>
                                OOPS !
                            </h1>
                            <div className='w-full h-[60%] '>
                                <p className='w-full h-[25%] lg:h-[40%] flex justify-center text-[1rem] font-poppins text-dark-800 dark:text-light-800'>
                                    {errorDescription}
                                </p>
                                <div className='w-full h-[60%] flex justify-center items-center'>
                                    <Link to={"/"} class="mx-auto w-[135px] h-[50%]  lg:h-[50px] 2xl:h-[60px] flex items-center justify-center rounded-xl border-4 border-transparent dark:bg-dark-700 bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">
                                        Go Home !
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}