import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Trainings from '../components/Training'
function Training() {
  return (
    <div >
        <Navbar/>
        <HeroImg heading='TRAINING.' text="Pre-Flight & In-Flight Training"/>
        <Trainings/>
        <Footer/>
    </div>
  )
}

export default Training