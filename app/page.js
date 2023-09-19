import Image from 'next/image'
import Link from 'next/link'
import LandingBar from './Components/LandingBar'
import LandingHero from './Components/LandingHero'

import LandingSteps from './Components/LandingSteps'
import LandingFeatures from './Components/LandingFeatures'
import LandingVideo from './Components/LandingVideo'
import Modal from './Components/Modal'
import LandingPrice from './Components/LandingPricing'
import Interest from './Components/Interest'
import LandingAction from './Components/LandingAction'
import LandingFooter from './Components/LandingFooter'


export default function Home() {



  return (

    
    
  <div style={{scrollBehavior:'smooth'}}>
     <header>
        <title>Test</title>
      </header>
      <main className=' flex self-center place-content-center  bg-gray-100 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
     
   

     <div className=' md:w-[70rem] lg:w-[80rem] w-[25rem] mr-0 flex-col'>

      
     <LandingBar/>


     <LandingHero />

     <Interest/>

     <LandingSteps/>

     <div id='features'>
     <LandingFeatures/>
     </div>

     <LandingVideo/>

     <div id='pricing'>
     <LandingPrice/>
     </div>

     <LandingAction/>

     <LandingFooter/>


     </div>

     
     
     
   </main>
  </div>
  )
}
