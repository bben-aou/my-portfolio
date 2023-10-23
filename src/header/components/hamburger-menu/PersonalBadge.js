import React from 'react'


export default function PersonalBadge(props) {
    return (
        <div className=' w-[85%] h-[25%]  mx-[7.5%] py-[30px]  border-b-[1px] border-[##eff3f9]'>
            <img src={props.pic} alt='profilePic' className='w-[50px] h-[50px] rounded-full' />
            <div className='font-poppins text-dark-900 text-[12px] font-semibold mt-[10px]'>
                {props.userName}
            </div>
            <div className='text-[8px] font-poppins text-dark-800 font-light mt-[3px] pl-[2px]'>
                {props.title}
            </div>
        </div>
    )
}
