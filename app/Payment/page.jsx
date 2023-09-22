'use client'
import Link from "next/link"
import Pricing from "../Components/LandingPricing"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
//import { auth } from "../firebaseConfig"


export default function Payment(){


  //const user= auth.currentUser

    const router =useRouter()
    //Code here works 
    useEffect(()=>{
        LemonSqueezy.Setup({
            eventHandler: async (event) => {

                if(event.event==='Checkout.Success'){
                    console.log(event)
                }
                   /*if (event.event==='Checkout.Success'){
                    await setDoc(doc(db,'Users',user,'SubscriptionDetails','sub'),{
                      data: event
                    }).then(async(snap)=>{
                      updateDoc(doc(db, 'Users', user), {
                        approved: true,
                        SON: format(new Date(), 'yyyy/MM/dd')
                      }).then(async (snap)=>{
                        await updateDoc(doc(db,'Folios','List'),{
                          List: arrayUnion(folio)
                        })
            
                      }).then((snap)=>{
                  
                        LemonSqueezy.Url.Close()
                        router.push('/Build')
                      })
            
                    })
                   }*/
            }
          })
          
    },[])



   

  

    return(
        <main className=' flex self-center place-content-center  bg-gray-100 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
            <header>
                <title>Payments</title>
                <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
            </header>

            <div className=' md:w-[70rem] lg:w-[80rem] w-[25rem] mr-0 flex-col'>


            <Pricing/>

            
           <div className="mt-[5%] flex-col">
           <Link href='/PrivacyPolicy' className='text-gray-500 mt-4  cursor-pointer underline'>Privacy Policy</Link><br/>
           <Link href='/TermsAndConditions'  className='text-gray-500 mt-4  cursor-pointer underline'>Terms and Conditions</Link> 
           </div>
            </div>

        </main>
    )
}