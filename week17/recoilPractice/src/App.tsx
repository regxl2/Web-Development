import './App.css';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { SelectorFamily } from './pages/SelectorFamily.tsx';

function App() {
  return (
    <RecoilRoot>
      {/*<BasicAtomNSelector/>*/}

      {/*<React.Suspense fallback={<Loading/>}>*/}
      {/*  <AsyncDataQueries/>*/}
      {/*</React.Suspense>*/}

      {/*<AtomFamily/>*/}

      <React.Suspense fallback = {<Loading/>}>
        <SelectorFamily/>
      </React.Suspense>

    </RecoilRoot>
  )
}

const Loading = ()=>{
  return (
    <div>{"Loading..."}</div>
  )
}


export default App
