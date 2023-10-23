import React from 'react'
import icons from '../../../assets/icons/icons';
import ItemBox from './ItemBox'

export default function NavItems() {
    return (
        <div className='w-[85%] h-[70%]  mx-[7.5%] py-[20px] '>

            <ItemBox icon={icons.homeIcon} iconDark={icons.homeIconDark} navPath={"Home"} clicked={true} />
            <ItemBox icon={icons.aboutMeIcon} iconDark={icons.aboutMeDarkIcon} navPath={"About"} clicked={false} />
            <ItemBox icon={icons.skillsIcons} iconDark={icons.skillsDarkIcons} navPath={"skills"} clicked={false} />
            <ItemBox icon={icons.projectsIcon} iconDark={icons.projectsDarkIcon} navPath={"Projects"} clicked={false} />
            <ItemBox icon={icons.contactIcon} iconDark={icons.contactDarkIcon} navPath={"Contact"} clicked={true} />

        </div>
    )
}
