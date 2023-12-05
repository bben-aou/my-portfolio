import React from 'react'
import icons from '../../assets/icons/icons'
import './about.css'

import { AppContext } from '../../App';
import { useContext } from 'react';


export default function Quote({quoteContent, author}) {

  const {theme} = useContext(AppContext);

  return (
    <div className='w-full h-2/5  flex flex-col justify-center animate-show-up'>
    <img src={(theme !== "dark") ? icons.quoteMark : icons.quoteMarkW } alt="" className='w-[40px] h-[40px] self-center' />
    <p className='text-center font-quote text-[1.2rem] text-gray-800 dark:text-light-800'>
        {quoteContent}
    </p>
    <div className='text-center font-roboto font-bold text-[1.2rem] tracking-wide mt-1'>
        <span className='text-dark-800 dark:text-light-800'>~</span>
        <span className='text-dark-900 dark:text-[#00829b] dark:tracking-wide'>{author}</span>
    </div>
</div>
  )
}
