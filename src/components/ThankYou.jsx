import React from 'react'
import thankYou from '../images/icon-thank-you.svg';
const ThankYou = () => {
  return (
    <div className='thankyou'>
        <div className="thanks_inner">
          <img className="thanks_img" src={thankYou} alt="thanks Image" />
          <h3 className="thanks_h3">Thank You!</h3>
          <p className="thanks_p"> Thanks for confirming your subscription we hope you have fun using our platform if you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>  
    </div>
  )
}

export default ThankYou