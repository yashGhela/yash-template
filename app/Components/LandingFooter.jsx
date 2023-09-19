
import Link from "next/link"



export default function LandingFooter(){


    return(

        <div className="mt-[10%]">
            <hr />
            
            <div
              className=' mt-[50px] mb-[50px] flex-col md:grid md:grid-cols-2 '
              >
        
            <div>
            <p className="font-bold text-gray-400 py-3 ">Legal</p>
            <Link href='/PrivacyPolicy'    className='text-gray-400 hover:underline  py-3 cursor-pointer'>Privacy Policy</Link><br/>
            <Link href='/TermsAndConditions'  className='text-gray-400 hover:underline  py-3 cursor-pointer'>Terms and Conditions</Link>
            </div>

            <div>
            <p className="font-bold text-gray-400 py-3 ">Links</p>
            <Link href='/#pricing'    className='text-gray-400 hover:underline  py-3 cursor-pointer'>Pricing</Link><br/>
            <Link href='/#features'  className='text-gray-400 hover:underline  py-3 cursor-pointer'>Features</Link>
            </div>
               

                

                </div>

                <p className="font-bold text-gray-400 py-3 ">Made by Yash Codes</p>


        </div>
    )
}