//import { auth } from "../firebaseConfig"

async function getStuff(){
    return null
}


export default  function Dashboard(){

    //const user= auth.currentUser
    return(
        <div>
        <header>
           <title>Dashboard</title>
         </header>
         <main className=' flex self-center place-content-center  bg-gray-100 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden'>
     
   

     <div className=' md:w-[70rem] lg:w-[80rem] w-[40rem] mr-0 flex-col'>
        <p className='text-3xl mt-[5%] text-left  font-normal text-gray-600 '>Dashboard</p>
        </div>
   
        
        
        
      </main>
     </div>
    )
}