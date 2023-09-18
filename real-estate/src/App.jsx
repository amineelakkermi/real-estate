import React from 'react'
import { Navbar , Hero , Brand , Residence , Value , Contact , GetStarted , Footer } from './components'
import styles from './style'


const App = () => (
  <div className=" w-full overflow-hidden">
    
      <div className={`bg w-full`}>
        <Navbar />
    </div>

    <div className={`bg ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} pb-12`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Brand />
        <Residence />
        <Value />
        <Contact />
        <GetStarted />
      </div>
    </div>
    <div className={`${styles.paddingX}`}>
    <Footer />
    </div>
  </div>
);


export default App