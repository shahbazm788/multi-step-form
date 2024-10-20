import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import img from './images/bg-sidebar-desktop.svg';
import {
  Route,
  Link,
} from "react-router-dom";
import PersnolInfo from './components/PersnolInfo.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="main">
        <div className="inner">
          <div className="left" >
            <div className="list_outer">
          <div className="list_div">
            <div className="icon_div">
              <p>1</p>
            </div>
            <div className="info_div">
              <p className="step">STEP 1</p>
              <p className="info">your info</p>
            </div>
          </div>
            </div>
            
          </div>
          <div className="right">
          <PersnolInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
