import React from 'react'
import logo from '../assets/icons/logo.svg';
import openMenu from '../assets/icons/open-menu.svg'
import './Header.css'
import { useMediaQuery } from 'react-responsive'
import PersonalBadge from './components/hamburger-menu/PersonalBadge';
import NavItems from './components/hamburger-menu/NavItems';
import icons from '../assets/icons/icons';

export default function Header() {
    const nav = ["home", "about", "projects", "skills", "contact", "contact"];

    const isMdScreen = useMediaQuery({ minWidth: 768 });
    const isLgScreen = useMediaQuery({ minWidth: 1200 });

    return (
        <>
            <div className='header-container'>
                <div className='logo-container'>
                    <img src={logo} alt='logo ' className='w-[25px] h-[27px] lg:w-[50.06px] lg:h-[55px]' />
                    <div className='logo-name'>
                        Bilal Ben Aouad
                    </div>
                </div>
                <div className='spacing'></div>
                {
                    (!isMdScreen || !isLgScreen) &&
                    <div className='h-full w-[50%]  flex items-center justify-end'>
                        <img src={openMenu} alt='open-menu' className='w-[24px] h-[24px] cursor-pointer' />
                    </div>
                }
                {
                    isMdScreen &&
                    <nav className='nav'>
                        <ul className='ul'>
                            {
                                nav.map((item, index) => {
                                    return (
                                        <li className='li-items' key={index}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                }
            </div>
            <div className='ml-[20%] w-[80%]  h-[92vh] bg-[#f6f6f6]  '>
                <PersonalBadge userName="Bilal Ben Aouad" title="Frontend Developer" pic={`${icons.profilePic}`} />

                <NavItems />

            </div>
        </>
    )
}
