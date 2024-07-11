import {useEffect, useState} from "react";

function useDebounce(inputValue, time) {
    const [text, setText] = useState("");
    useEffect(() => {
        const timeout = setTimeout(() => {
            setText(inputValue)
        }, time)
        return (() => {
            clearTimeout(timeout)
        })
    }, [inputValue])
    return text
}

function UseDebounceHook() {
    const [inputValue, setInputValue] = useState("")
    const text = useDebounce(inputValue, 1000)
    return (
        <div>
            <div>{text}</div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    )
}

export default UseDebounceHook;