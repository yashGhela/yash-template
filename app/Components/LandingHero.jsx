'use client';
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';
import TestimonialAvatars from './TestimonialAvatars';
import LogoFeature from './LogoFeature';
import TestimonialBar from './TestimonialBar';

export default function LandingHero(){

    const router=useRouter()
    return(
        <motion.div 
        className='mt-40 ml-10 md:items-center items-center text-left p-5  md:flex flex-col '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false  }}
      
       
       > 
        
         <p className='md:text-8xl text-6xl font-black text-gray-400'>Build a SAAS</p>
         <p className={`text-transparent text-6xl md:text-8xl bg-clip-text pb-3 bg-gradient-to-r from-blue-400 to-cyan-400 font-black text-gray-700`}>in Days</p>
         
         <p className='font-bold text-gray-400 mt-4 p-2 md:text-center'>Create apps in days not weeks using this super fast <br/> and easy to use template</p>
         
          
    
        <div className="flex md:flex-col w-full items-center">
        <button onClick={()=>{router.push('/auth')}} className={`font-bold w-[40%] md:w-[25%] text-white text-xl rounded-xl bg-blue-300 hover:bg-blue-400 mt-5  md:h-14 p-2 mr-1`}>Start Now</button>
        <button onClick={()=>{router.push('/auth')}} className='font-normal w-[40%] md:w-[60%] text-gray-400 text-xl rounded-md  mt-2  md:h-14 p-2 mr-1'>Log In</button>

      


        </div>
        <div className='mt-10'>
       <TestimonialBar/>

        <LogoFeature/>
       </div>
         
        
        </motion.div>   
    )
}