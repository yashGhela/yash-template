'use client'
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
import LandingDemo from './Components/LandingDemo'
import { Element } from 'react-scroll'
import LandingExamples from './Components/LandingExamples'
import "@fontsource/montserrat"; 
import "@fontsource/poppins";




export default function Home() {
  




  return (

    
    
  <div style={{scrollBehavior:'smooth', fontFamily:'poppins'}}>
    
      <main className=' flex self-center place-content-center  bg-gray-100 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
      <SEO/>
    
   

     <div className=' md:w-[70rem] lg:w-full justify-center w-[25rem] mr-0 flex-col'>

      
     <LandingBar isLand={true}/>
     


     <LandingHero />

     <Interest/>

     
    <Element id='Demo' >
      <LandingDemo/>
    </Element>

     <Element id='Examples'>
      <LandingExamples/>
     </Element>

     <Element id='How-it-works'>
     <LandingSteps/> 
     </Element>

     <Element name='features'>
     <LandingFeatures/>
     </Element>

     

     <Element name='pricing'>
     <Pricing landing={true}/>
     </Element>

     <Element name='FAQ'>
      <LandingFaq/>
     </Element>

     <LandingAction/>

     <LandingFooter/>


     </div>

     
     
     
   </main>
  </div>
  )
}
