
'use client'

import { useState } from "react"
import ReactPlayer from "react-player"


export default function LandingVideo(){

    const [showModal, setShowModal]=useState(false)


    return(
        <div className="mt-20 self-center md:ml-[45%] ml-[25%]  ">

            {showModal &&<div className="fixed inset-0 bg-black opacity-50"></div>}
            <button onClick={()=>{setShowModal(true)}} className="p-5 w-40 flex rounded-xl   hover:bg-gray-300  ">Watch Video <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
            </button>
            


           
            <dialog open={showModal} className="bg-gray-100 rounded-md md:w-[40%] md:h-[50%] p-5 z-50  fixed inset-1">
            <button onClick={()=>{setShowModal(false)}} className=' rounded-md md:ml-[90%] ml-[90%]  p-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>

            <ReactPlayer className='rounded-md' width={'100%'} height={'90%'} url='https://www.youtube.com/watch?v=kIEWJ1ljEro' />
            
            
                


            </dialog>

        </div>
    )
}