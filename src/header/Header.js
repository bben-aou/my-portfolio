import logo from '../assets/icons/logo.svg';
import openMenuIcon from '../assets/icons/open-menu.svg'
import closeMenuIcon from '../assets/icons/closeMenu.svg'
import './Header.css'
import { useMediaQuery } from 'react-responsive'
import PersonalBadge from './components/hamburger-menu/PersonalBadge';
import NavItems from './components/hamburger-menu/NavItems';
import ThemeSwitchBtn from './components/theme/ThemeSwitchBtn';
import icons from '../assets/icons/icons';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import { useContext, useEffect } from 'react';


export default function Header() {
    const nav = ["home", "about", "projects", "skills", "contact"];

    const isMdScreen = useMediaQuery({ minWidth: 768 });
    const isLgScreen = useMediaQuery({ minWidth: 1200 });
    
    const { openMenu, setOpenMenu , theme} = useContext(AppContext);

    const handleClick = () => {
        setOpenMenu(!openMenu);
    }
    
    useEffect(()=>{
        if(isMdScreen || isLgScreen)
            setOpenMenu(false);
    },[isMdScreen, isLgScreen, setOpenMenu])



    return (
        <>
            <div className='header-container'>
                <div className='logo-container'>
                    <img src={(theme !== "dark") ? logo : icons.logoW} alt='logo ' className='logo-img' />
                    <div className='logo-name' >
                        Bilal Ben Aouad
                    </div>
                </div>
                <div className='spacing'></div>
                {
                    (!isMdScreen && !isLgScreen) &&
                    <div className='open-menu-icon' >
                        <img src={!openMenu ? openMenuIcon : closeMenuIcon} alt='open-menu' className='w-[24px] h-[24px] cursor-pointer' onClick={handleClick} />
                    </div>
                }
                {
                    isMdScreen &&
                    <nav className='nav'>
                        <ul className='ul'>
                            {
                                nav.map((item, index) => {
                                    return (
                                        <li className='li-items ' key={index} >
                                            {<Link to={item === 'home' ? '/' : `/${item}`}>{item}</Link>}
                                        </li>
                                    )
                                })
                            }

                            <ThemeSwitchBtn/>

                        </ul>
                    </nav>
                }
            </div>
           {(openMenu && !isMdScreen && !isLgScreen) && <div className='sm-menu-nav'>
                <PersonalBadge userName="Bilal Ben Aouad" title="Frontend Developer" pic={`${icons.profilePic}`} />
                <NavItems />
            </div>}
        </>
    )
}
