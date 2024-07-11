import React from 'react'
import ReactDOM from 'react-dom/client'
import Rendering from './Rendering.jsx'

import './index.css'
import {Keys} from "./Keys.jsx";
import Wrapper from "./WrapperComponent.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Wrapper/>
  </React.StrictMode>,
)
