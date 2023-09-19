'use client'
import { useRouter } from "next/navigation"

export default function LandingPrice(){

    const router= useRouter()

    

    const benefits=[
        'Benefit 1',
        'Benefit 2',
        'Benefit 3',
        'Benefit 4'
    ]

    const benefitspro=[
        'Benefit 1',
        'Benefit 2',
        'Benefit 3',
        'Benefit 4',
        'Benefit 5'
    ]

    return(

        <div className="mt-[10%] flex-col" >

            <p className="text-gray-400 text-2xl font-bold">Pricing</p>

            <div className="md:grid md:grid-cols-2 flex-col mt-20">

                <div className="md:w-[70%] w-full md:ml-40 rounded-xl h-[35rem] shadow-2xl ">

                    <p className='font-bold text-xl text-left text-gray-400 mt-4 p-6 '>Starter</p>

                    <p className='font-bold text-6xl text-center text-gray-400 mt-4 p-6 '>Free</p>
                    <div className="mt-10 ml-20">
                        {benefits.map((i)=>{
                            return(
                                <span className="flex mt-7 text-gray-300" >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                        </svg>
                                        <p className='font-normal text-md text-left text-gray-400  '>{i}</p>

                                    </span>
                            )
                        })}

                    


                    </div>
                    <button onClick={()=>{router.push('/auth')}} className=" w-[90%] mt-10 font-bold text-white p-5 rounded-xl bg-gray-300 hover:bg-gray-400 ">
                   
                    Start Now!
                    </button>
                </div>

                

                <div className="md:w-[70%] mt-10 md:mt-0 md:ml-20 w-full rounded-xl h-[42rem] shadow-2xl shadow-blue-300 border-[3px] border-blue-300 ">

                <p className='font-bold text-sm mt-3  text-gray-100  py-2 w-20 text-center bg-blue-300 ml-[40%] rounded-md   '>Popular</p>

                

                    <p className='font-bold text-2xl text-left text-gray-400  p-6 '>Pro</p>

                    <p className='font-bold text-6xl text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mt-4 p-6 '>$125<span className='font-normal text-transparent text-xl bg-clip-text md:text-[30px] bg-gradient-to-r from-blue-400 to-cyan-400 mt-2'>/year</span></p>
                    <div className="mt-10 ml-20">
                        {benefitspro.map((i)=>{
                            return(
                                <span className="flex mt-7 text-gray-300" >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                        </svg>
                                        <p className='font-normal text-md text-left text-gray-400  '>{i}</p>

                                    </span>
                            )
                        })}

                    


                    </div>
                    <button onClick={()=>{router.push('/auth')}} className=" w-[90%] mt-10 font-bold text-white p-5 rounded-xl bg-blue-300 hover:bg-blue-400 ">
                   
                    Start Now!
                    </button>
                </div>
            </div>

        </div>
    )
}