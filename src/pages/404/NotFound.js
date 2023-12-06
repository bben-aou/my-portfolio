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
            <div className='container'>
                <div className='wrapper'>
                    <div className='illustrator-avatar-styling'>
                        <img src={icons.notFound} alt='' className='w-full h-[75%] lg:h-full ' />
                    </div>
                    <div className='description-section'>
                        <div className='wrapper-description'>
                            <h1 className='ops-title'>
                                OOPS !
                            </h1>
                            <div className='w-full h-[60%] '>
                                <p className='p-description'>
                                    {errorDescription}
                                </p>
                                <div className='link-wrapper'>
                                    <Link to={"/"} class="btn-styling">
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