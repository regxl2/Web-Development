import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Count count={count} setCount={setCount}/>
    </div>
  )
}


function Count({count, setCount}){
    // In this example, the Count component doesn't need setCount attribute. However, it needs to be passed down to
    // a Buttons component
    // passing props can become verbose and inconvenient when you need to pass some
    // prop deeply through the cd, or if many components need the same props.
    // The nearest common ancestor could be far from the components that need data, and lifting state up that high
    // can lead to a situation called "prop drilling".
    // To solve the problem of the prop drilling, we use context api
    return (
        <div>
            <h1>{count}</h1>
            <Buttons setCount={setCount}/>
        </div>
    )
}

function Buttons({setCount}) {
    return (
        <div>
            <button onClick={() => {
                setCount((currentValue) => currentValue + 1)
            }}>Increment
            </button>
            <button onClick={() => {
                setCount((currentValue) => currentValue - 1)
            }}>Decrement
            </button>
        </div>
    )
}

export default App
