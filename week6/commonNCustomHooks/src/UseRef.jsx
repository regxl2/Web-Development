import React , {useRef, useState, useEffect}from "react"

// code1 (accessing document element using DOM): -
// How to un optimally override the React state dynamically by accessing the document
// function UseRef(){
//     const [income, setIncome] = useState(20000)
//     useEffect(() => {
//         setTimeout(()=>{
//             document.getElementById("income").innerHTML = "10"
//         }, 1000)
//     }, []);
//     return (
//         <div>
//             {"hi there, your income tax returns are "}
//             <div id={"income"}>{income}</div>
//         </div>
//     )
// }

//code2(accessing the document element using useRef)
// by useRef you can optimally dynamically override the React state in the document.

function UseRef(){
    const [income, setIncome] = useState(20000)
    const incomeRef = useRef()
    useEffect(() => {
        setTimeout(()=>{
            incomeRef.current.innerHTML = "10"
        }, 1000)
    }, []);
    return (
        <div>
            {"hi there, your income tax returns are "}
            <div ref={incomeRef}>{income}</div>
        </div>
    )
}

export default UseRef