import React, { useState } from 'react'

const AddOns = (item) => {

const [border,setBorder] = useState({
    border1:'',
    border2:'',
    border3:''
});
const { allData, changData, planPrice } = item;


    return (
        <div>
            <h2 className='persnol_hedding'>Pick add-ons</h2>
            <p className='persnol_peragraf'>Add-ons heip enhance your gaming experienc.</p>

            <div className={`add_on_outer`}>
                <div className={`add_on_item ${border.border1}`} onClick={() => {
                    
            }}>
                    <div className="chack">
                    <label className="chack_box_container">
                            <input type="checkbox" onChange={(e) => {
                                e.target.checked == true ? setBorder({...border,border1:"border"}): setBorder({...border,border1:""});
              allData.online_service == true ?  changData("online_service",false):changData("online_service",true);

                            }} />
                            <span className="checkmark"></span>
                    </label>
                    </div>
                    <div className="info_list">
                        <h4>Online Service </h4>
                        <p>Access to multiplayer games</p>
                    </div>
                    <div className="add_on_price">
                        
                        {/* <p>+$ 1/{allData.plan == "mo" ? "mo":"yr"}</p> */}
                        <p>+$ {allData.plan == "mo" ? planPrice.monthly.online_service:planPrice.yearly.online_service}/{allData.plan == "mo" ? "mo":"yr"}</p>


                    </div>
                </div>
                <div className={`add_on_item ${border.border2}`}
                >
                    <div className="chack">
                    <label className="chack_box_container">
                            <input type="checkbox" onChange={(e) => {
                                e.target.checked == true ? setBorder({...border,border2:"border"}): setBorder({...border,border2:""});
                    allData.larger_storage == true ?  changData("larger_storage",false):changData("larger_storage",true);

                            }} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="info_list">
                        <h4>Larger Storage </h4>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <div className="add_on_price">
                    {/* <p>+$ 1/{allData.plan == "mo" ? "mo":"yr"}</p> */}
                    <p>+$ {allData.plan == "mo" ? planPrice.monthly.larger_storage:planPrice.yearly.larger_storage}/{allData.plan == "mo" ? "mo":"yr"}</p>

                        
                    </div>
                </div>
                <div className={`add_on_item ${border.border3}`}>
                    <div className="chack">
                        <label className="chack_box_container">
                            <input type="checkbox" onChange={(e) => {
                                e.target.checked == true ? setBorder({...border,border3:"border"}): setBorder({...border,border3:""});
                    allData.customizableprofile == true ?  changData("customizableprofile",false):changData("customizableprofile",true);

                            }}  />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="info_list">
                        <h4>Customizable profile </h4>
                        <p>Custom theme on your profile</p>
                    </div>
                    <div className="add_on_price">
                    {/* <p>+$ 1/{allData.plan == "mo" ? "mo":"yr"}</p> */}
                    <p>+$ {allData.plan == "mo" ? planPrice.monthly.customizableprofile:planPrice.yearly.customizableprofile}/{allData.plan == "mo" ? "mo":"yr"}</p>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddOns