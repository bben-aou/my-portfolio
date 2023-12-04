import React from 'react'
import icons from '../../../assets/icons/icons'
import Typewriter from 'typewriter-effect';
import './sides.css';
import urlSocialMedia from './socialMediaData'



export default function LeftSide() {

    const handleLinkedInClick = (socialMediaUrl) => {
        window.open(socialMediaUrl, '_blank');
    };

    return (
        <div className="w-full h-[60%] px-[20px] lg:px-0 lg:h-full lg:w-1/2 text-dark-800 dark:text-light-900 ">
            <div className="w-full h-[50%]  flex flex-col  lg:justify-end ">
                <div className="w-full flex items-center  ">
                    <span className="text-[12px] lg:text-[18px] font-poppins font-medium tracking-wide">
                        Hi Everyone
                    </span>
                    <div className="h-full  w-[50%] flex items-center px-[10px]">
                        <img src={icons.hiIcon} alt="Hi-everyone" className=" w-[18px] h-[18px] lg:w-[25px] lg:h-[25px] " />
                        <span className=" text-[12px] lg:text-[18px] font-poppins font-medium pl-[10px] tracking-wide">
                            I'm
                        </span>
                    </div>
                </div>
                <div className="w-full flex items-center ">
                    <div className="w-full font-bold leading-tight	flex flex-col ">
                        <div className=" text-[30px] lg:text-[60px] uppercase [word-spacing:12px]">
                            Bilal Ben Aouad
                        </div>
                        <div className="text-[22px] lg:text-[35px] py-[10px] font-medium uppercase pl-[20px] flex text-[#00829b]">
                            <span className="pr-[10px]">{"> "} </span>
                            <Typewriter
                                options={{
                                    strings:
                                        [
                                            ' Front-end developer',
                                            ' React developer',
                                            ' NextJs developer'
                                        ],
                                    autoStart: true,
                                    loop: true,

                                }}
                            />
                        </div>
                        <span className="text-[12px] lg:text-[16px] font-poppins font-medium tracking-wide pl-[2px] lg:pt-[20px]">
                            I help startups launch and and grow their products
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[50%] flex  flex-col  items-center lg:gap-0 lg:items-start gap-[30%] lg:justify-evenly">
                <a href={"https://drive.google.com/file/d/1k-Q0fX-0q88YdGJupU89Rv_DAtuxRCL6/view"} download rel='noreferrer' target='_blank' className="w-[60%] h-[20%] flex items-center justify-center text-[14px] lg:w-[35%] lg:h-[18%] font-poppins font-normal lg:text-[18px]  bg-dark-900  rounded-[10px] lg:rounded-[20px] text-white transition duration-700 ease-in-out hover:scale-105">
                    Download My Resume
                </a>
                <div className=" flex items-center gap-[26px] ">
                    <img src={icons.inIcon} alt="linked-in" className="w-[27px] h-[27px] lg:w-[36px] lg:h-[39px] hover:scale-110 transition duration-700 ease-in-out cursor-pointer" onClick={() => handleLinkedInClick(urlSocialMedia[0].url)} />
                    <img src={icons.gitIcon} alt="github" className="w-[27px] h-[27px] lg:w-[40px] lg:h-[38px] hover:scale-110 transition duration-700 ease-in-out cursor-pointer" onClick={() => handleLinkedInClick(urlSocialMedia[1].url)} />
                    <img src={icons.igIcon} alt="instagram" className=" w-[27px] h-[27px] lg:w-[40px] lg:h-[40px] hover:scale-110 transition duration-700 ease-in-out cursor-pointer" onClick={() => handleLinkedInClick(urlSocialMedia[2].url)} />
                </div>
            </div>
        </div>
    )
}
