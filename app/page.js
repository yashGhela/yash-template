
import LandingBar from './Components/LandingBar'
import LandingHero from './Components/LandingHero'

import LandingSteps from './Components/LandingSteps'
import LandingFeatures from './Components/LandingFeatures'
import LandingVideo from './Components/LandingVideo'
import Modal from './Components/Modal'

import Interest from './Components/Interest'
import LandingAction from './Components/LandingAction'
import LandingFooter from './Components/LandingFooter'
import LandingFaq from './Components/LandingFaq'
import Pricing from './Components/LandingPricing'
import SEO from './Components/SEO'



export default function Home() {
  



  return (

    
    
  <div style={{scrollBehavior:'smooth'}}>
    
      <main className=' flex self-center place-content-center  bg-gray-100 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
      <SEO/>
    
   

     <div className=' md:w-[70rem] lg:w-[80rem] w-[25rem] mr-0 flex-col'>

      
     <LandingBar/>


     <LandingHero />

     <Interest/>

     <div id='How-it-works'>
     <LandingSteps/> 
     </div>

     <div id='features'>
     <LandingFeatures/>
     </div>

     <LandingVideo/>

     <div id='pricing'>
     <Pricing landing={true}/>
     </div>

     <div id='FAQ'>
      <LandingFaq/>
     </div>

     <LandingAction/>

     <LandingFooter/>


     </div>

     
     
     
   </main>
  </div>
  )
}
