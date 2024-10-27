import React,{useEffect, useState} from 'react'
import arcade from '../images/icon-arcade.svg';
import advanced from '../images/icon-advanced.svg';
import pro from '../images/icon-pro.svg';


const SelectPlan = (item) => {
  const [planTime,setPlantime] = useState("m");
  const { allData, changData } = item;


  return (
    <div>
      <h2 className='persnol_hedding'>Select Your Plan</h2>
      <p className='persnol_peragraf'>You Have to option of monthely or yearly billing. </p>

      <div className="plan_cards">


        <div className="card card_active" 
          onClick={() => {
            changData("planType","arcade");
          }}
        >
          <div className="arcade">
            <div className='plan_image_div'><img src={arcade} alt="" /></div>
            <div className="plan_info">
            <h4 className='card_h4'>Arcade</h4>
              {/* <p className='card_p'>$9/mo</p> */}
              {planTime == "m" ? <p className='card_p'>$9/mo</p> :<p className='card_p'>$90/yr</p>}
              {planTime == "y" ? <p className='free_offer'>2 months free</p> :""}

            </div>
          </div>
        </div>

        <div className="card" 
         onClick={() => {
          changData("planType","Advanced");
        }}
        >
          <div className="arcade">
            <div className='plan_image_div'><img src={advanced} alt="" /></div>
           <div className="plan_info">
           <h4 className='card_h4'>Advanced</h4>
            {planTime == "m" ? <p className='card_p'>$12/mo</p> :<p className='card_p'>$120/yr</p>}
            {planTime == "y" ? <p className='free_offer'>2 months free</p> :""}
           </div>
          </div>
        </div>

        <div className="card"
         onClick={() => {
          changData("planType","pro");
        }}
        >
          <div className="arcade">
            <div className='plan_image_div'><img src={pro} alt="" /></div>
          
         <div className="plan_info">
         <h4 className='card_h4'>Pro</h4>
          {planTime == "m" ? <p className='card_p'>$15/mo</p> :<p className='card_p'>$150/yr</p>}
            {planTime == "y" ? <p className='free_offer'>2 months free</p> :""}
         </div>
         </div>
        </div>


      </div>

      <div className="togale" >
        <p className={planTime == "m" ? "bold" : "normal"}>Monthly</p>
        <div className="toggle" onClick={() => {
          planTime == "m" ? setPlantime("y") : setPlantime("m")
        }} >
          <div className="toggle_button">
            <div className={`pin ${planTime == "m" ? "off" : "on"}`}></div>
          </div>
        </div>
        <p className={planTime == "y" ? "bold" : "normal"}>Yearly</p>
      </div>
    </div>
  )
}

export default SelectPlan