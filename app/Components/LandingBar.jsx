import Link from "next/link";

export default function LandingBar(){
    return(
        <div className={`flex ml-2  md:w-[90%] sm:w-full  md:ml-[25%] lg:ml-[10%]   h-14 rounded-md mt-0 text-center`}>
        <p className={` text-gray-500 font-bold ml-[10%] md:ml-5 mt-4`}>Project Name </p>
      
     
      <div className='mt-4 md:ml-[20%] -ml-52  flex'>
       <p className={`text-gray-500 sm:invisible invisible md:visible ml-8 cursor-pointer`}>Examples</p>
        <p className={`text-gray-500 sm:invisible invisible md:visible ml-8 cursor-pointer`}>Pricing</p>
        <p className={`text-gray-500 sm:invisible invisible md:visible ml-8 cursor-pointer`}>Use Cases</p>
        
       </div>

       <div className="flex mt-4 md:ml-[10%] lg:ml-[25%] sm:ml-4 ">
       <Link href='/auth' className={`p-3 h-8 w-16 ml-1  md:ml-8 mt-0 pt-1 bg-blue-300 hover:bg-blue-400 font-bold text-white rounded-md`}>Join</Link>
        <Link href='/auth' className={`p-3 h-8 w-16 ml-2 md:ml-4 mt-0 pt-1 bg-gray-300 hover:bg-gray-400 font-bold text-white rounded-md`}>Login</Link>
       </div>
      
       


</div>
    )
}