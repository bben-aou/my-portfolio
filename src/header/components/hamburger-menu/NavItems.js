import React from 'react'
import icons from '../../../assets/icons/icons';
import ItemBox from './ItemBox'
import { Link } from 'react-router-dom';


export default function NavItems() {

    return (
        <div className='w-[85%] h-[70%]  mx-[7.5%] py-[20px] '>

            <Link to={"/"}><ItemBox icon={icons.homeIcon} iconDark={icons.homeIconDark} navPath={"/"} clicked={true} /></Link>
            <Link to={"/about"}><ItemBox icon={icons.aboutMeIcon} iconDark={icons.aboutMeDarkIcon} navPath={"/about"} clicked={false} /></Link>
            <Link to={"/skills"}><ItemBox icon={icons.skillsIcons} iconDark={icons.skillsDarkIcons} navPath={"/skills"} clicked={false} /></Link>
            <Link to={"/projects"}><ItemBox icon={icons.projectsIcon} iconDark={icons.projectsDarkIcon} navPath={"/projects"} clicked={false} /></Link>
            <Link to={"/contact"}><ItemBox icon={icons.contactIcon} iconDark={icons.contactDarkIcon} navPath={"/contact"} clicked={true} /></Link>

        </div>
    )
}
