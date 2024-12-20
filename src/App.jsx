import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import img from './images/bg-sidebar-desktop.svg';
import {
  Route,
  Link,
  Routes,
} from "react-router-dom";
import PersnolInfo from './components/PersnolInfo.jsx'
import ListDiv from './components/ListDiv.jsx';
import SelectPlan from './components/SelectPlan.jsx';
import AddOns from './components/AddOns.jsx';
import Summary from './components/Summary.jsx';
import ThankYou from './components/ThankYou.jsx';
function App() {
  const [count, setCount] = useState(2);

const [planPrice,setPlanPrice] = useState({
  monthly : {
    arcade:9,
    advanced: 12,
    pro:15,
    online_service: 1,
    larger_storage: 2,
    customizableprofile: 2,
  },
  yearly : {
    arcade:90,
    advanced: 120,
    pro:150,
    online_service: 10,
    larger_storage: 20,
    customizableprofile: 20,
  },
});

  const [allData, setAlldata] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    plan: "mo",
    planType: "arcade",
    online_service: false,
    larger_storage: false,
    customizableprofile: false,
    totalPrice: 0,
    stage: 1

  })

  const changData = (key, value) => {
    if (key === "userName") {
      setAlldata({ ...allData, userName: value })
    }
    else if (key === "userEmail") {
      setAlldata({ ...allData, userEmail: value })
    }
    else if (key === "userPhone") {
      setAlldata({ ...allData, userPhone: value })
    }
    else if (key === "planType") {
      setAlldata({ ...allData, planType: value })
    }
    else if (key === "plan") {
      setAlldata({ ...allData, plan: value })
    }
    else if (key === "online_service") {
      setAlldata({...allData, online_service: value })
    }
    else if (key === "larger_storage") {
      setAlldata({...allData, larger_storage: value })
    }
    else if (key === "customizableprofile") {
      setAlldata({...allData, customizableprofile: value })
    }
    
    // console.log(key,value)
    // console.log(value)
  }
  useEffect(() => {
    console.log(allData)

  }, [setCount, allData])
  return (
    <div>
      <div className="main">
        <div className="inner">
          <div className="left" >
            <div className="list_outer">
              <div onClick={() => { setCount(1) }}>
                <ListDiv info={{ num: 1, text: "Persnol Info" }} bg={count == 1 ? "list_bg_add" : ""} />
              </div>
              <div onClick={() => setCount(2)}>
                <ListDiv info={{ num: 2, text: "Select Plan" }} bg={count == 2 ? "list_bg_add" : ""} />
              </div>
              <div onClick={() => setCount(3)}>
                <ListDiv info={{ num: 3, text: "add-ons" }} bg={count == 3 ? "list_bg_add" : ""} /> </div>
              <div onClick={() => setCount(4)}>
                <ListDiv info={{ num: 4, text: "summary" }} bg={count == 4 ? "list_bg_add" : ""} />
              </div>

            </div>

          </div>
          <div className="right">
            <div className="component_outer">
              {count == 1 ? <PersnolInfo allData={allData} changData={changData} /> : count == 2 ?
                <SelectPlan allData={allData} changData={changData} planPrice={planPrice}/> :
                 count == 3 ? <AddOns allData={allData} changData={changData} planPrice={planPrice} /> :
                  count == 4 ? <Summary  allData={allData} changData={changData} planPrice={planPrice} /> : count == 5 ? <ThankYou /> : ''}
            </div>
            {count == 5 ? '' : <div className="next_btn_div">
              {count < 4 ? <button className='btn_next' onClick={() => {
                if(count == 1){
                  if(allData.userName == '' || allData.userEmail == '' || allData.userPhone == ''){
                  alert("All Stars fields are requierd");
                  }
                  else{
                    setCount(count == 5 ? 5 : count + 1)
    
                    }
                }
                else  {
                  setCount(count == 5 ? 5 : count + 1)
                  
                }
                // else if(count == 2) {
                //   setCount(count == 5 ? 5 : count + 1)
                  
                // }
               
              }} >Next Step</button> :
                <button className='btn_next btn_confirm' onClick={() => setCount(count == 5 ? 5 : count + 1)} >Confirm</button>}
              <button className='go_back' onClick={() => {
                setCount(count > 1 ? count - 1 : 1)
              }}>Go Back</button>

            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
