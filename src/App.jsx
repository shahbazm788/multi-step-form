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
  const [count, setCount] = useState(1);
useEffect(() => {

},[setCount])
  return (
    <div>
      <div className="main">
        <div className="inner">
          <div className="left" >
            <div className="list_outer">
             <div onClick={() => {
              console.log(count)
              setCount(1)
              console.log(count)

             }}>
               <ListDiv  info={{num:1,text:"Persnol Info"}} bg={count == 1 ? "list_bg_add" : "" } />
             </div>
             <div onClick={() => {
              console.log(count)
              setCount(2)
              console.log(count)

             }}>
              <ListDiv  info={{num:2,text:"Select Plan"}} bg={count == 2 ? "list_bg_add" : "" }  />
              </div>
              <div onClick={() => {
              console.log(count)
              setCount(3)
              console.log(count)

             }}>
              <ListDiv info={{num:3,text:"add-ons"}} bg={count == 3 ? "list_bg_add" : "" } /> </div>
              <div onClick={() => {
              console.log(count)
              setCount(4)
              console.log(count)

             }}>
              <ListDiv info={{num:4,text:"summary"}} bg={count == 4 ? "list_bg_add" : "" }  />
              </div>
             
            </div>
            
          </div>
          <div className="right">
        <div className="component_outer">
            { count == 1 ? <PersnolInfo  /> : count == 2 ?
            <SelectPlan /> : count == 3 ? <AddOns /> : count == 4 ? <Summary /> :count == 5 ? <ThankYou /> : '' }
           </div>
{count == 5 ? '':          <div className="next_btn_div">
         {count < 4 ? <button className='btn_next' onClick={() => setCount(count == 5 ? 5:count + 1 )} >Next Step</button>:
         <button className='btn_next btn_confirm' onClick={() => setCount(count == 5 ? 5:count + 1 )} >Confirm</button>}
          <button className='go_back' onClick={() => {
          setCount(count > 1 ? count -1 : 1)
          } }>Go Back</button>

         </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
