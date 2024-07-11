import {useEffect, useState} from "react";

function useTimer(){
    const [time, setTime] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(time => time + 1)
        }, 1000)

        return (()=>{
            clearInterval(interval)
        })
    }, [])
    return time
}

function UseTimerHook(){
    const time = useTimer()
    return(
        <div>
            {`Timer is at ${time}`}
        </div>
    )
}

export default UseTimerHook;