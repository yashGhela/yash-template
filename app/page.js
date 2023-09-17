import Image from 'next/image'
import Link from 'next/link'
import LandingBar from './Components/LandingBar'
import LandingHero from './Components/LandingHero'

import LandingSteps from './Components/LandingSteps'
import LandingFeatures from './Components/LandingFeatures'


export default function Home() {



  return (

    
    
  <div>
     <header>
        <title>Test</title>
      </header>
      <main className=' flex self-center place-content-center  bg-gray-100 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
     
   

     <div className=' md:w-[70rem] lg:w-[80rem] w-[25rem] mr-0 flex-col'>

      
     <LandingBar/>


     <LandingHero />

     <LandingSteps/>

     <LandingFeatures/>
     </div>

     
     
     
   </main>
  </div>
  )
}
