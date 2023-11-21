'use client'

//import { auth } from "../firebaseConfig"

import CancelSub from "../../Components/CancelSub";
import LogOut from "../../Components/LogOut";





  function Settings(){

    //const user= auth.currentUser



  
 
    return(
        <div>
        <header>
           <title>Settings</title>
         </header>
         <main className=' flex self-center place-content-center  bg-gray-100 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden'>
     
   

     <div className=' md:w-[70rem] lg:w-[80rem] w-[40rem] mr-0 flex-col'>
        <p className='text-3xl mt-[5%] text-left  font-normal text-gray-600 '>Settings</p>

      <div className="mt-10 ">
 
      <LogOut/>
      
      </div>

      <div  className="mt-10 ">
      <CancelSub/>
      </div>
        </div>
   
        
        
        
      </main>
     </div>
    )
}

// export default withAuth(Settings)