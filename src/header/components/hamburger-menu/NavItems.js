import React from 'react'
import icons from '../../../assets/icons/icons';
import ItemBox from './ItemBox'
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AppContext } from '../../../App';


export default function NavItems() {
    const {openMenu, setOpenMenu} = useContext(AppContext);

    return (
        <div className='w-[85%] h-[70%]  mx-[7.5%] py-[20px] '>

            <Link to={"/"} onClick={()=>{setOpenMenu(!openMenu)}}><ItemBox icon={icons.homeIcon} iconDark={icons.homeIconDark} navPath={"/"} clicked={true} /></Link>
            <Link to={"/about"} onClick={()=>{setOpenMenu(!openMenu)}}><ItemBox icon={icons.aboutMeIcon} iconDark={icons.aboutMeDarkIcon} navPath={"/about"} clicked={false} /></Link>
            <Link to={"/skills"} onClick={()=>{setOpenMenu(!openMenu)}}><ItemBox icon={icons.skillsIcons} iconDark={icons.skillsDarkIcons} navPath={"/skills"} clicked={false} /></Link>
            <Link to={"/projects"} onClick={()=>{setOpenMenu(!openMenu)}}><ItemBox icon={icons.projectsIcon} iconDark={icons.projectsDarkIcon} navPath={"/projects"} clicked={false} /></Link>
            <Link to={"/contact"} onClick={()=>{setOpenMenu(!openMenu)}}><ItemBox icon={icons.contactIcon} iconDark={icons.contactDarkIcon} navPath={"/contact"} clicked={true} /></Link>

        </div>
    )
}
