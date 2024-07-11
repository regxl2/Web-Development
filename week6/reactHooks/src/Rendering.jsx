import React, {useState} from 'react'
import './Rendering.css'

// This component to understand the fundamentals of rendering and re-rendering

// function Rendering() {
//     return (
//         <>
//             <HeaderWithButton/>
//             <Header title={"My name is Abhishek"}/>
//             <Header title={"My name is Abhishek"}/>
//             <Header title={"My name is Abhishek"}/>
//         </>
//     )
//     // We should only return one top level parent in a component.It because it helps in reconciliation.
//     // In React, reconciliation refers to the process of updating the virtual DOM and efficiently
//     // making changes to the actual DOM based on the differences between the current and previous states of a component.
// }
//
// function HeaderWithButton() {
//     const [random, setRandom] = useState(0.0)
//     // A state variable that is being used inside a component changes then
//     // a parent component re-render triggers all-children re-rendering.
//
//     // Since, we know state variable triggers rendering of whole parent.
//     // Therefore, we moved the state down making HeaderWithButton component
//     // and moving and storing the random state variable from an Rendering component to
//     // HeaderWithButton a component.
//     // By pushing the state down to the lowest common Ancestor HeaderWithButton component. We minimized the
//     // rendering
//     return (
//         <>
//             <button onClick={() => {
//                 setRandom(Math.random())
//             }}>{"Click me to change the title"}</button>
//             <Header title={`My name is ${random}`}/>
//         </>
//     )
// }
//
// function Header({title}) {
//     return (
//         <div>{title}</div>
//     )
// }


//Alternative way is to use React.memo()
// memo() lets you skip the re-rendering of the component if its props are remains unchanged.
function Rendering(){
    const[random, setRandom] = useState(0.0)
    return (
        <div>
            <button onClick={() => {
                setRandom(Math.random())
            }}>Click me to change the title
            </button>
            <Header title={`My name is ${random}`}/>
            <Header title="My name is Abhishek"/>
            <Header title="My name is Abhishek"/>
            <Header title="My name is Abhishek"/>
            <Header title="My name is Abhishek"/>
        </div>
    )
}

const Header = React.memo(({title}) => {
    return (
        <div>{title}</div>
    )
})

export default Rendering
