import React, {memo, useCallback, useState} from "react";

// code 1 (using function): -

// function UseCallback(){
//
//     const [count, setCount] = useState(0)
//
//     const inputFunction = ()=>{
//         console.log("Hi there! ")
//     }
//     // Const fun1 = function1(){console.log("Hi there")}
//     // const fun2 = function2(){console.log("Hi there")}
//     // In javascript, even though fun1 and fun2 are the same but fun1==fun2 is false.
//     // Therefore, this inputFunction is passed as an argument in the ButtonComponent
//     // even though we have used memo on ButtonComponent. It will also cause ButtonComponent to
//     // rerender, if render happens it will compare the new render function with the previous render
//     // function, but the equality of the previous and current render function will not be the same
//     // Therefore, it will cause render of ButtonComponent, even we are using memo.
//     // To avoid the unnecessary rerender, in this case, we use useCallback hook.
//
//     return(
//         <div>
//             <ButtonComponent inputFunction={inputFunction}/>
//             <button onClick={()=>{
//                 setCount(count+1)
//             }}>{`Click me ${count}`}</button>
//         </div>
//     )
// }
const ButtonComponent = memo(({inputFunction})=>{
    console.log("Child render")
    return (
        <div>
            <button>Button clicked</button>
        </div>
    )
})

// code 2 (using function expression):-
// function UseCallback(){
//     const [count, setCount] = useState(0)
//     return(
//         <div>
//             <ButtonComponent inputFunction={()=>{
//                 console.log("child render")
//             }}/>
//             // using function expression problem remains the same
//             <button onClick={()=>{
//                 setCount(count+1)
//             }}>{`Click me ${count}`}</button>
//         </div>
//     )
// }


// code 3(problem solved using useCallback): -

function UseCallback(){
    const [count, setCount] = useState(0)

    const inputFunction = useCallback(()=>{
        console.log("child render")
    }, [])
    //By using the useCallback, we stopped some unnecessary rendering of the child component.

    return(
        <div>
            <ButtonComponent inputFunction={inputFunction}/>
            <button onClick={()=>{
                setCount(count+1)
            }}>{`Click me ${count}`}</button>
        </div>
    )
}


export default UseCallback