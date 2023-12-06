import React from 'react'
import homeArt from '../../../../assets/home-art.svg'
import './sides.css';

export default function RightSide() {
    return (
        <div className=" w-full h-[40%] lg:h-full lg:w-[50%] flex items-center justify-center ">
            <img src={homeArt} alt="home-art" className='bg-contain max-w-full max-h-full'/>
        </div>
    )
}
