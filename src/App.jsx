import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import img from './images/bg-sidebar-desktop.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <div className="inner">
          <div className="left" >
            {/* <img src={img} alt="" /> */}
          </div>
          <div className="right">
            <h2 className='persnol_hedding'>Personal info</h2>
            <p className='persnol_peragraf'>Please provide your name, email address, and phone number.</p>

            <div className='input_div'>
              <p className='name_p'>Name</p>
              <input type="text" className='input' placeholder='Mohammad Shahbaz' />
            </div>
            <div className='input_div'>
              <p className='name_p'>Email Address</p>
              <input type="email" className='input' placeholder='shahbazm788@gmail.com' />
            </div>
            <div className='input_div'>
              <div className="name_and_error">
              <p className='name_p'>Phone Number</p>
              <p>This field is requierd</p>
              </div>
              <input type="number" className='input' placeholder='e.g. +92 340 8628219' />
            </div>

            <button className='btn_next' >Next Step</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
