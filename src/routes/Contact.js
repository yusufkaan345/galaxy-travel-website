import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div >
        <Navbar />
        <HeroImg heading="CONTACT." text="Contact GLX Travel"/>
        <Form/>
        <Footer />
    </div>
  )
}

export default Home