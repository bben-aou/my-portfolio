import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AlertPopUp({ title, subtitle, status }) {

    const [show, setShow] = useState(true);
    return (

        <div class={show ? `flex h-[90%] md:h-[80%] items-center justify-center  dark:bg-darkTheme-900` : `hidden`}>
            <div class="rounded-lg dark:bg-[#e4f0f7] md:px-16 px-12 py-[1rem]  lg:py-8 2xl:py-16  2xl:px-8 ">
                <div class="flex justify-center">
                    <div class={`rounded-full ${status === "succuss" ? `bg-green-200 ` : `bg-red-200 `}  p-6`}>
                        <div class={`flex h-16 w-16 items-center justify-center ${status === "succuss" ? `bg-green-500 ` : `bg-red-500 `} rounded-full p-4`}>
                            {
                                <>

                                    {status === "succuss" &&
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    }
                                    {status !== "succuss" &&
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                        </svg>
                                    }
                                </>
                            }

                        </div>
                    </div>
                </div>
                <h3 class="my-4 text-center text-3xl font-semibold text-gray-700">
                    {title}
                </h3>
                <p class="text-center font-normal text-gray-600">
                    {subtitle}
                </p>
                <Link to={"/"} onClick={() => { setShow(false) }} class="mx-auto w-[150px] mt-5 md:mt-10 block rounded-xl border-4 border-transparent dark:bg-dark-700 bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">
                    Go Home !
                </Link>
            </div>
        </div>
    )
}
