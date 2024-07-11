import react, {useState, useMemo} from "react";

// code without useMemo: -

// function summation (num){
//     console.log("summation is called")
//     // this log is printed even if the count state changes
//     let sum = 0
//     for(let i=1; i<=num; i++){
//         sum = sum + i
//     }
//     return sum
// }
//
// function UseMemo() {
//     const[count, setCount] = useState(0)
//     const[num, setNum] = useState(0)
//
//     let sum = summation(num)
//     // We see on changing the count state the whole component is rendered
//     // even the summation function is called again to calculate the summation upto
//     // the same the number which was previously calculated.
//     // So to avoid the unnecessary expensive calculation, we will use useMemo hook
//
//     return (
//         <div>
//             <input onChange={e=>{
//                 const value = parseInt(e.target.value)
//                 if(!value) setNum(0)
//                 else setNum(value)
//             }
//             } type={"text"} placeholder={"Enter a number"}/><br/>
//             <div>{`The sum from 1 to ${num} is ${sum}`}</div>
//             <button onClick={
//                 ()=>{
//                     setCount(count+1)
//                 }
//             }>{`Counter ${count}`}</button>
//         </div>
//     )
// }

//code with useMemo

function UseMemo() {
    const[count, setCount] = useState(0)
    const[num, setNum] = useState(0)

    let sum = useMemo(()=>{
        console.log("loop is called")
        // this log is only printed when the num state changes, not when count state changes
        let sum = 0
        for(let i=1; i<=num; i++){
            sum = sum + i
        }
        return sum
    }, [num])

    // with the help of useMemo, we avoided the unnecessary calculation.
    // useMemo hook works as the same as memoization of DP just like caching the output
    // of all the previous input

    return (
        <div>
            <input onChange={e=>{
                const value = parseInt(e.target.value)
                if(!value) setNum(0)
                else setNum(value)
            }
            } type={"text"} placeholder={"Enter a number"}/><br/>
            <div>{`The sum from 1 to ${num} is ${sum}`}</div>
            <button onClick={
                ()=>{
                    setCount(count+1)
                }
            }>{`Counter ${count}`}</button>
        </div>
    )
}

export default UseMemo