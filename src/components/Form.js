import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label >Your Name</label>
            <input type="text" />
            <label >Email</label>
            <input type="email" />
            <label >Subject</label>
            <input type="text" />
            <label >Details</label>
            <textarea rows='6' placeholder='Type a short message here' />
            <button className='btn'>Submit</button>
        </form>
        
    </div>
  )
}

export default Form