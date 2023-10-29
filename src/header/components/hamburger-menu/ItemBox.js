import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';



export default function ItemBox(props) {
    const location = useLocation();
    const [path , setPath] = useState("");
    useEffect(()=>{
        switch(props.navPath){
            case "/" :{
                setPath("Home");
                break;
            }
            case "/about" :{
                setPath("About");
                break;
            }
            case "/skills" :{
                setPath("Skills");
                break;
            }
            case "/projects" :{
                setPath("Project");
                break;
            }
            case "/contact" :{
                setPath("Contact");
                break;
            }
            default:{
                setPath("Home");
                break;
            }

        }
    },[props.navPath])

    return (
        <div className={`w-[75%] h-[45px] ${location.pathname === props.navPath ? 'bg-dark-900' : 'bg-transparent'}  rounded-[12px] px-[20px] flex items-center gap-[10px]`} >
            <img src={location.pathname === props.navPath ? props.icon : props.iconDark} alt='home' className='w-[24px] h-[24px] ' />
            <div className={`pt-[3px] font-poppins ${location.pathname === props.navPath ? 'text-white' : 'text-[#425366]'} font-normal text-xs `}>
                {path}
            </div>
        </div>
    )
}
