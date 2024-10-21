import React, { useState } from 'react'

const AddOns = () => {

const [border,setBorder] = useState({
    border1:'',
    border2:'',
    border3:''
})

    return (
        <div>
            <h2 className='persnol_hedding'>Pick add-ons</h2>
            <p className='persnol_peragraf'>Add-ons heip enhance your gaming experienc.</p>

            <div className={`add_on_outer`}>
                <div className={`add_on_item ${border.border1}`}>
                    <div className="chack">
                    <label className="chack_box_container">
                            <input type="checkbox" onChange={(e) => {
                                e.target.checked == true ? setBorder({...border,border1:"border"}): setBorder({...border,border1:""})
                            }} />
                            <span className="checkmark"></span>
                    </label>
                    </div>
                    <div className="info_list">
                        <h4>Online Service </h4>
                        <p>Access to multiplayer games</p>
                    </div>
                    <div className="add_on_price">
                        <p>+$ 1/mo</p>
                    </div>
                </div>
                <div className={`add_on_item ${border.border2}`}>
                    <div className="chack">
                    <label className="chack_box_container">
                            <input type="checkbox" onChange={(e) => {
                                e.target.checked == true ? setBorder({...border,border2:"border"}): setBorder({...border,border2:""})
                            }} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="info_list">
                        <h4>Online Service </h4>
                        <p>Access to multiplayer games</p>
                    </div>
                    <div className="add_on_price">
                        <p>+$ 1/mo</p>
                    </div>
                </div>
                <div className={`add_on_item ${border.border3}`}>
                    <div className="chack">
                        <label className="chack_box_container">
                            <input type="checkbox" onChange={(e) => {
                                e.target.checked == true ? setBorder({...border,border3:"border"}): setBorder({...border,border3:""})
                            }}  />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="info_list">
                        <h4>Online Service </h4>
                        <p>Access to multiplayer games</p>
                    </div>
                    <div className="add_on_price">
                        <p>+$ 1/mo</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddOns