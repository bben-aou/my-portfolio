import React from 'react'
import './about.css'
import Header from '../../header/Header'
import profile from '../../assets/bben-aou.jpeg'

export default function About() {
    return (
        <>
            <Header />
            <div className={"main-about"}>
                <div className="w-full h-full  lg:h-[90%]  flex flex-col">
                        <div className=' w-full h-[25%] bg-cyan-600  flex items-center justify-center'>
                            <img src={profile} alt='Bilal' className='rounded-full w-[8rem] h-[8rem] '/>
                        </div>
                        <div className='w-full h-[75%]  bg-green-500'>
                            <div className='w-full bg-red-500 h-[15%] flex items-center justify-center'>
                                So, Who Am I ?
                            </div>
                            <div className=' font-poppins font-light  w-[70%] h-[85%] bg-black mx-[15%] flex items-center justify-center'>
                                <p className='text-[24px]'>
                                    I'm Bilal Ben Aouad, a passionate software engineer with over three years of dedicated study in the field. I thrive in front-end development but constantly seek opportunities to challenge myself with new technologies. When I'm not coding, you'll find me strumming the guitar, exploring new destinations, or camping with friends. With a thirst for knowledge and a drive for growth, I'm ready to take on new challenges and contribute to the ever-evolving world of IT.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
