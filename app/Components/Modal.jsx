'use client'

import {motion} from 'framer-motion'
import { useState } from "react"

export default function Modal({showModal,setShowModal, children, Header, thin}){

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
        
      }

    

    return(
        <div>
            {showModal &&<div className="fixed inset-0 bg-black opacity-50"></div>}

            

            <motion.dialog 
            open={showModal}
             className={`bg-gray-100 rounded-md md:${thin?'w-[25%]':'w-[40%]'} md:h-[50%] p-5 z-50  fixed inset-1`}
             animate={showModal ? "open" : "closed"}
            variants={variants}>
            <div className='flex p-2'>
            <p className='text-gray-500 font-bold text-md p-2'>{Header}</p>
            <button onClick={()=>{setShowModal(false)}} className=' rounded-md md:ml-[65%] ml-[30%]  p-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            </div>
            <hr />

            <div className="mt-10">{children}</div>

            
 
            
            
                


            </motion.dialog>
        </div>


    )
}