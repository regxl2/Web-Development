import React from 'react'
import ReactDOM from 'react-dom/client'
import UseEffect from './UseEffect.jsx'
import './index.css'
import FetchTodoAssignment from "./FetchTodoAssignment.jsx";
import UseMemo from "./UseMemo.jsx";
import UseCallback from "./UseCallback.jsx";
import UseRef from "./UseRef.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseRef/>
  </React.StrictMode>,
)
