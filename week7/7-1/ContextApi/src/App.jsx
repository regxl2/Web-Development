import React, {useContext, useState} from 'react'

import './App.css'
import {CountContext} from './context.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            {/*Context api is just syntactical sugar over prop drilling.*/}
            <CountContext.Provider value={count}>
                <Count setCount={setCount}/>
            </CountContext.Provider>
        </div>
    )
}


function Count({setCount}){
    return (
        <div>
            <CountRenderer/>
            <Buttons setCount={setCount}/>
        </div>
    )
}

function CountRenderer(){
    const count  = useContext(CountContext);
    return(
        <h1>{count}</h1>
    )
}

function Buttons({setCount}) {
    const count = useContext(CountContext);
    return (
        <div>
            <button onClick={() => {
                setCount(count+1)
            }}>Increment
            </button>
            <button onClick={() => {
                setCount(count-1)
            }}>Decrement
            </button>
        </div>
    )
}

export default App
