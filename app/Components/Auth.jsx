'use client';

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'universal-cookie';

/*import {browserLocalPersistence, createUserWithEmailAndPassword, setPersistence, signInWithPopup} from 'firebase/auth'
import  { auth,db,provider } from '../firebaseConfig'
import { doc, getDoc, setDoc } from 'firebase/firestore'*/


export default function Auth() {
    

    const nextYear = new Date();
    const router =useRouter()

    nextYear.setFullYear(nextYear.getFullYear() + 1);//next years date for cookies

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const cookie= new Cookies()


    /*
    const signInG=async()=>{
      setPersistence(auth,browserLocalPersistence).then(async()=>{
        await signInWithPopup(auth,provider).then(async(r)=>{
          const ref= doc(db,'Users',r.user.uid);

          var ud=r.user;
          

          await getDoc(ref).then((snap)=>{
              if(snap.exists() && snap.data().approved===true){
                
                router.push('/Dashboard')
                
  
              }else if (!snap.exists()){
                 await setDoc (ref, {
                email: ud.email,
                username: username,
                paid: false
              }).then((snap)=>{
                cookie.set('fst','tsf',{expires:  nextYear, path:'/'})
                
                router.push('/build')
              })
  
              }
        })
      })
    }

    const signInEp=async()=>{
      setPersistence(auth,browserLocalPersistence).then(async()=>{
        await createUserWithEmailAndPassword(auth,email,password).then((r)=>{
           const ref= doc(db,'Users',r.user.uid);

                   await setDoc (ref, {
                email: ud.email,
                username: username,
                paid: false
              }).then((snap)=>{
                cookie.set('fst','tsf',{expires:  nextYear, path:'/'})
                
                router.push('/build')
              })

        }).catch(error=>{
          if (error.code==='auth/email-already-in-use'){
            await signInWithEmailAndPassword(auth,email,password).then(async(r)=>{
          const ref= doc(db,'Users',r.user.uid);

          var ud=r.user;
          

          await getDoc(ref).then((snap)=>{
              if(snap.exists() && snap.data().approved===true){
                
                router.push('/Dashboard')
                
  
              }
          }
        })
      })
    }

     
    
    
    */
 

    


  return (
    <div className={`md:scale-110 flex self-center place-content-center  bg-gray-100 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden`}>
       <header>
        <title>Sign In</title>
      </header>
        <div className='mt-52 bg-gray-200 h-[360px] w-[250px] p-5 rounded-md '>
            <button onClick={()=>{signInG()}} className='w-full p-4 rounded-lg text-white font-bold bg-red-300 hover:bg-red-400'>Sign In with Google</button>
            <hr className='mt-2' />

           
            <input  onChange={(e)=>{setEmail(e.target.value)}}  className='p-2 w-full rounded-lg mt-2 text-gray-400 font-bold focus:outline-none ' type="email" placeholder='leodavinci@email.com'/>
            <input onChange={(e)=>{setPassword(e.target.value)}} className='p-2 w-full rounded-lg mt-2 text-gray-400 font-bold focus:outline-none ' type="password" placeholder='******'/>
            <button onClick={()=>{signInEp()}} className='w-full p-4 rounded-lg mt-3 text-white font-bold bg-gray-300 hover:bg-gray-400'>Sign In </button>
            <p  className='text-gray-500 mt-4 text-xs  cursor-pointer'>By signing up you agree to our <Link href='/TermsAndConditions'  className='text-gray-500 mt-4  cursor-pointer underline'>Terms and Conditions</Link> and our <Link href='/PrivacyPolicy' className='text-gray-500 mt-4  cursor-pointer underline'>Privacy Policy</Link> </p>
            
            

        </div>
    </div>
  )
}