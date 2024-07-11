import {useContext, useState} from 'react'
import './App.css'
import {CountContext} from "./CountContext.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <CountContext.Provider value = {count}>
                <Count setCount={setCount}/>
            </CountContext.Provider>
        </div>
    )
}

function Count({setCount}) {
    // Since we are using context api, and we are not using the count variable in the Count component,
    // so we may think, it must not render a Count component only render CountRenderer and Buttons component.
    // But a Count component renders on change in the value of count State.
    // So, context api is just syntactical sugar to get rid of prop drilling.
    // It doesn't make rendering more performant.
    // So, a solution to this problem is the state management.
    return (
        <div>
            <CountRenderer/>
            <Buttons setCount={setCount}/>
        </div>
    )
}

function CountRenderer() {
    const count = useContext(CountContext)
    return (
        <h1>{count}</h1>
    )
}

function Buttons({setCount}) {
    const count = useContext(CountContext)
    return (
        <div>
            <button onClick={() => {
                setCount(count - 1)
            }}>decrement
            </button>
            <button onClick={() => {
                setCount(count + 1)
            }}>increment
            </button>
        </div>
    )
}

export default App
