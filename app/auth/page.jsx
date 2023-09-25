import Head from "next/head"
import Auth from "../Components/Auth"
//import { auth } from "../firebaseConfig"

export default function AuthPage() {
    
  //const user= auth.currentUser

    


  return (
    <div className={`md:scale-110 flex self-center place-content-center  bg-gray-100 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden`}>


   <Auth/>
   </div>
  )
}