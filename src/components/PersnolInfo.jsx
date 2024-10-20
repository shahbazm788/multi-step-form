import React  from 'react';





const PersnolInfo  =  () =>  {


  return (
    <div>
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
  );
}


   export default PersnolInfo;