import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';





const PersnolInfo = (item) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { allData, changData } = item;
  const [show,setshow] = useState('show_error');
  const [hide,setHide] = useState("hide_error");
  const [formData,setFormData] = useState({
    name:'',
    email: '',
    phone:''
     
  })

  useEffect(() => {

  },[formData])
  return (
    <div>
      <h2 className='persnol_hedding'>Personal info</h2>
      <p className='persnol_peragraf'>Please provide your name, email address, and phone number.</p>

      <div className='input_div'>
        <div className="name_and_error">
          <p className='name_p'>Name <span className='star_span'>*</span></p>
          <p className={`${formData.name.length > 0 && formData.name.length < 3 ? "danger" :"dangerhide"}`}>This field is requierd</p>
        </div>
        <input type="text" className='input' placeholder='e.g. Mohammad Shahbaz'
          onChange={(e) => {
            setFormData({...formData,name:e.target.value});
              if(formData.name.length > 3 ){
             changData("userName", e.target.value);
              }
          }}


        />
      </div>
      <div className='input_div'>
        <div className="name_and_error">
          <p className='name_p'>Email Address <span className='star_span'>*</span></p>
          <p className={`${formData.email == "typing"  ? 'danger': 'dangerhide'}`}>This field is requierd</p>
        </div>
        <input type="email" className='input' placeholder='e.g. shahbazm788@gmail.com'
        onFocus={() => {
            setFormData({...formData,email:'typing'});
        }}
          onChange={(e) => {
            let valedate = regex.test(e.target.value);
            if(valedate === true){
            setFormData({...formData,email:e.target.value});
             changData("userEmail", e.target.value);
            }
            // changData("userEmail", e.target.value);
          }}


        />
      </div>
      <div className='input_div'>
        <div className="name_and_error">
          <p className='name_p'>Phone Number <span className='star_span'>*</span></p>
          <p className={`${formData.phone == "typing"  ? 'danger': 'dangerhide'}`}>This field is requierd</p>
        </div>
        <input type="text" className='input' placeholder='e.g. +92 340 8628219'
        onFocus={() => {
            if(formData.phone.length < 10 ){
          setFormData({...formData,phone:'typing'});
            }
        }}
          onChange={(e) => {
            if(e.target.value.length > 10){
              setFormData({...formData,phone:e.target.value});
            changData("userPhone", e.target.value);
            }
            else{
          setFormData({...formData,phone:'typing'});

            }
          }}

        />
      </div>


    </div>
  );
}


export default PersnolInfo;