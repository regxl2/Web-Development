import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FlexBoxTailWind} from "./FlexBoxTailWind.jsx";
import Loader from "./Loader.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Loader/>
    </div>
  )
}

export default App
