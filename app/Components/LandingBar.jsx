import Link from "next/link";
import { SmoothScrollLink } from "./SmoothScrollLink";

export default function LandingBar({isLand}){
    return(
        <div className={`flex ml-2  md:w-[90%] sm:w-full  md:ml-[25%] lg:ml-[10%]   h-14 rounded-md mt-0 text-center`}>
        <p className={` text-gray-500 font-bold ml-[10%] md:ml-5 mt-4`}>Project Name </p>
      
     
        {isLand?
      <div className='mt-5 md:ml-[20%] -ml-52  flex'>
      <SmoothScrollLink to='features' >Features</SmoothScrollLink>
        <SmoothScrollLink to='pricing' >Pricing</SmoothScrollLink>
       
        
       </div>:null}

       <div className={`flex mt-4 ${isLand?'md:ml-[10%] lg:ml-[25%]': 'md:ml-[80%] lg:ml-[60%]'} ml-28 sm:ml-28 `}>
       <Link href='/auth' className={`p-3 h-8 w-16 ml-1  md:ml-8 mt-0 pt-1 bg-blue-300 hover:bg-blue-400 font-bold text-white rounded-md`}>Join</Link>
        <Link href='/auth?state=Login' className={`p-3 h-8 w-16 ml-2 md:ml-4 mt-0 pt-1 bg-gray-300 hover:bg-gray-400 font-bold text-white rounded-md`}>Login</Link>
       </div>
      
       


</div>
    )
}