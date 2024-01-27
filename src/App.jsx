import React from 'react'
import {
  Billing,
  Business,
  CTA,
  Hero,
  Navbar,
  Stats,
  Footer,
  Testimonials,
  Impressum
} from './components'
import styles from './style'
import uparrowimg from "./assets/uparrow.png";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

ReactGA.initialize("UA-176079673-1");

const App = () => {

   const [showTopButton, setshowTopButton] = useState(false)

   const handleScrollToTopEvent=()=>{
     window.scrollTo({top:0 , behavior:'smooth'});
   }

   useEffect(() => {
     const handleTopEvent=()=>{
       window.pageYOffset>300 ? setshowTopButton(true) :setshowTopButton(false);
     }

     window.addEventListener('scroll',handleTopEvent);


     return () => {
       window.removeEventListener('scroll',handleTopEvent);
     }
   }, []);

   return(
     <div className="bg-primary w-full overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <Testimonials/>
          <CTA/>
          <Footer/>
          <Impressum/>
        </div>
      </div>
    </div>
  )
}

export default App
