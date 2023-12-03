import React from 'react'
import icons from '../../../assets/icons/icons'
import urlSocialMedia from '../../../header/components/sides/socialMediaData';

export default function SocialMedia() {

    const handleLinkedInClick = (socialMediaUrl) => {
        window.open(socialMediaUrl, '_blank');
    };

    return (
        <div className='w-full h-[84px]  flex items-center justify-center gap-4'>
            <img src={icons.inIcon} alt="linked-in" className="w-[27px] h-[27px] lg:w-[36px] lg:h-[39px] hover:scale-110 transition duration-700 ease-in-out cursor-pointer" onClick={() => handleLinkedInClick(urlSocialMedia[0].url)} />
            <img src={icons.gitIcon} alt="github" className="w-[27px] h-[27px] lg:w-[40px] lg:h-[38px] hover:scale-110 transition duration-700 ease-in-out cursor-pointer" onClick={() => handleLinkedInClick(urlSocialMedia[1].url)} />
            <img src={icons.igIcon} alt="instagram" className=" w-[27px] h-[27px] lg:w-[40px] lg:h-[40px] mb-[-2px] hover:scale-110 transition duration-700 ease-in-out cursor-pointer" onClick={() => handleLinkedInClick(urlSocialMedia[2].url)} />
        </div>
    )
}
