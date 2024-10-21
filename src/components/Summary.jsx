import React from 'react'

const Summary = () => {
  return (
    <div>
          <h2 className='persnol_hedding'>Finishing up</h2>
          <p className='persnol_peragraf'>Double-chack everything looks OK befor  confirming.</p>

          <div className="summery_outer">
            <div className="plan_selection">
                <div className="sumery_left">
                    <h4>Acorde (monthly)</h4>
                    <p>Change</p>

                </div>
                <div className="sumery_right">
                    <p>$9/mo</p>
                </div>
            </div>
            <div className="summry_add_on">
                <div className="service">
                    <p>onlie service</p>
                    <p>+$1/m</p>
                </div>
                <div className="service">
                    <p>Large Storage</p>
                    <p>+$1/m</p>
                </div>
            </div>
          </div>
          <div className="sumry_toatal">
            <p>Total(Monthly)</p>
            <p className='total_p'>$12/mo</p>
          </div>
    </div>
  )
}

export default Summary