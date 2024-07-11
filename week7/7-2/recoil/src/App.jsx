import './App.css'
import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {countAtom, evenSelector} from "./store/atoms/count.jsx";

function App() {
    return (
        <div>
            <RecoilRoot>
                <Count/>
            </RecoilRoot>
        </div>
    )
}

function Count() {
    return (
        <div>
            <CountRenderer/>
            <Buttons/>
            <EvenRenderer/>
        </div>
    )
}

function CountRenderer() {
    const count = useRecoilValue(countAtom)
    return (
        <h1>{count}</h1>
    )
}

function Buttons() {
    const setCount = useSetRecoilState(countAtom)
    return (
        <div>
            <button onClick={() => {
                setCount(count => count-1)
            }}>decrement
            </button>
            <button onClick={() => {
                setCount(count => count + 2)
            }}>increment
            </button>
        </div>
    )
}

function EvenRenderer(){
    console.log("EvenRenderer")
    // const count = useRecoilValue(countAtom)
    // return (
    //     <div>{(count%2===0)?"It is Even":""}</div>
    // )
    // we slightly optimize this code, since count%2 is derived from count state.
    // It will render even the count%2 remains same after increment/decrement
    // (since we are incrementing value by 2 and decrementing values by 1, the count%2 may remain the same)
    // To optimize this. We can also use useMemo hook here, but there is
    // another way of doing this optimization is use recoil selector
    const even = useRecoilValue(evenSelector)
    return(
        <div>{even?"":"It is even"}</div>
    )
}

export default App
