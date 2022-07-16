import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Pricings from '../components/Pricings'

const Pricing = () => {
  return (
    <div >
        <Navbar/>
        <HeroImg 
           heading="PRICING."
           text="Choose your trip."
        />
        <Pricings/>
        <Footer/>

    </div>
  )
}

export default Pricing