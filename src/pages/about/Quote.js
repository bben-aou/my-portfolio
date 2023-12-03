import React from 'react'
import icons from '../../assets/icons/icons'

export default function Quote({quoteContent, author}) {
  return (
    <div className='w-full h-2/5  flex flex-col justify-center'>
    <img src={icons.quoteMark} alt="" className='w-[40px] h-[40px] self-center' />
    <p className='text-center font-quote text-[1.2rem] text-gray-800'>
        {quoteContent}
    </p>
    <div className='text-center font-roboto font-bold text-[1.2rem] tracking-wide mt-1'>
        <span className='text-dark-800'>~</span>
        <span className='text-dark-900  '>{author}</span>
    </div>
</div>
  )
}
