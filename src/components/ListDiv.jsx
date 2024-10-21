import React from 'react';
const ListDiv = (item) => {
  
    
  return (
    <div>
     
         <div className="list_div">
            <div className="icon_div">
              <p className={`${item.bg}`}>{item.info.num}</p>
            </div>
            <div className="info_div">
              <p className="step">STEP {item.info.num}</p>
              <p className="info"> {item.info.text}</p>
            </div>
          </div>
     
    </div>
  )
}

export default ListDiv