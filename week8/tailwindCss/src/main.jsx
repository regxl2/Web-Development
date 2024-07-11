import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {FlexBoxTailWind} from "./FlexBoxTailWind.jsx";
import {Grid} from "./Grid.jsx";
import {Responsive} from "./assets/Responsive.jsx";
import Loader from "./Loader.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<FlexBoxTailWind/>*/}
    {/*  <Grid/>*/}
      <App/>
  </React.StrictMode>,
)
