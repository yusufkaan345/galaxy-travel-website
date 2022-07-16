import React from 'react'
import './Training.css'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'
import { Link } from 'react-router-dom'

const Training = () => {
    return (
        <div className='training'>
            <div className="left">
                <h1>Training</h1>
                <p>Thorogh training is a necessity when traveling to space.
                    We offer all iinclusive training for pre-flight and in-flight scenarios.
                </p>
                <Link to='/contact'> <button className="btn">Contact</button> </Link>
            </div>
            <div className="right">
                <div className="image-container">
                    <div className="image-stack top">
                        <img src= {Moon} className='img' alt="" />
                    </div>
                    <div className="image-stack bottom">
                        <img src= {Pod} className='img' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training