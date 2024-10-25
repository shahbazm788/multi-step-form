import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';





const PersnolInfo = (item) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { allData, changData } = item;
  const [show,setshow] = useState('show_error');
  const [hide,setHide] = useState("hide_error");
  const [showErrors,setShowErrors] = useState({
    nameError:'show_error',
    emailError: '',
    phoneError:''
     
  })

  // useEffect(() => {

  // },[showErrors])
  return (
    <div>
      <h2 className='persnol_hedding'>Personal info</h2>
      <p className='persnol_peragraf'>Please provide your name, email address, and phone number.</p>

      <div className='input_div'>
        <div className="name_and_error">
          <p className='name_p'>Name</p>
          <p className='show_err'>This field is requierd</p>
        </div>
        <input type="text" className='input' placeholder='e.g. Mohammad Shahbaz'
          onChange={(e) => {
            if(e.target.value.length < 3){
              setShowErrors({...showErrors,nameError:"show_error"})
              console.log(showErrors)
            }else{
              setShowErrors({...showErrors,nameError:"hide_error"})
              console.log(showErrors)

            }
            changData("userName", e.target.value);
          }}


        />
      </div>
      <div className='input_div'>
        <div className="name_and_error">
          <p className='name_p'>Email Address</p>
          <p>This field is requierd</p>
        </div>
        <input type="email" className='input' placeholder='e.g. shahbazm788@gmail.com'
          onChange={(e) => {
            let valedate = regex.test(e.target.value);
            console.log(valedate)
            // changData("userEmail", e.target.value);
          }}


        />
      </div>
      <div className='input_div'>
        <div className="name_and_error">
          <p className='name_p'>Phone Number</p>
          <p>This field is requierd</p>
        </div>
        <input type="text" className='input' placeholder='e.g. +92 340 8628219'
          onChange={(e) => {

            changData("userPhone", e.target.value);
          }}

        />
      </div>


    </div>
  );
}


export default PersnolInfo;