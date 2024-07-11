import React from 'react'
import ReactDOM from 'react-dom/client'
import RecoilBasic from './RecoilBasic.jsx'
import './index.css'
import AsynchronousDataQuery from "./AsynchronousDataQuery.jsx";
import {AtomFamily} from "./AtomFamily.jsx";
import {SelectorFamily} from "./SelectorFamily.jsx";
import {RecoilStateLoadable} from "./RecoilStateLoadable.jsx";
import {ErrorHandlingWithErrorBoundary} from "./ErrorHandlingWithErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<AsynchronousDataQuery/>*/}
      {/*<RecoilBasic />*/}
    {/*<AtomFamily />*/}
    {/*  <SelectorFamily/>*/}
    {/*  <RecoilStateLoadable/>*/}
      <ErrorHandlingWithErrorBoundary/>
  </React.StrictMode>,
)
