import React from 'react'

export default function ItemBox(props) {
    return (
        <div className={`w-[75%] h-[45px] ${props.clicked ? 'bg-dark-900' : 'bg-transparent'}  rounded-[12px] px-[20px] flex items-center gap-[10px]`}>
            <img src={props.clicked ? props.icon : props.iconDark} alt='home' className='w-[24px] h-[24px] ' />
            <div className={`pt-[3px] font-poppins ${props.clicked ? 'text-white' : 'text-[#425366]'} text-white font-normal text-xs `}>
                {props.navPath}
            </div>

        </div>
    )
}
