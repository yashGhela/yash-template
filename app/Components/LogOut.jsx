
'use client'
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
//import { auth } from "../firebaseConfig"

export default function LogOut(){
    //const user= auth.currentUser

    const router=useRouter()

    /*const logOut=()=>{
        signOut(auth).then(()=>{
          deleteCookie('useraidt')
          router.push('/')
          
        })
      }*/
      

    return(

        <button className="w-72 p-3 border border-gray-400 hover:bg-gray-400 text-gray-400 hover:text-gray-100 rounded-xl">Log Out</button>

    )
}