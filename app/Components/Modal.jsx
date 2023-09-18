'use client'

import { useState } from "react"

export default function Modal(){

    const [showModal,setShowModal]=useState(false)

    return(
        <div>
            {showModal &&<div className="fixed inset-0 bg-black opacity-50"></div>}

            <button onClick={()=>{setShowModal(true)}} className="p-5 w-40  rounded-xl   hover:bg-gray-300  ">Show Modal</button>

            <dialog open={showModal} className="bg-gray-100 rounded-md md:w-[40%] md:h-[50%] p-5 z-50  fixed inset-1">
            <button onClick={()=>{setShowModal(false)}} className=' rounded-md md:ml-[90%] ml-[90%]  p-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>

            <p>Stuff goes here</p>
            
            
                


            </dialog>
        </div>


    )
}