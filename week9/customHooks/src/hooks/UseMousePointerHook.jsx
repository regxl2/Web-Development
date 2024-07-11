import {useEffect, useState} from "react";

function userMousePointer() {
    const [position, setPosition] = useState({x: 0, y: 0})
    const mouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY})
    }
    useEffect(() => {
        window.addEventListener("mousemove", mouseMove)

        return (() => {
            // In React useEffect hook, when adding an event listener,
            // it's generally advisable to pass the same function reference to both
            // addEventListener and removeEventListener. This ensures that the correct
            // listener is removed during cleanup. If you pass a different function reference
            // during removal, the listener won't be removed successfully because the function reference isn't the same.

            //So, The code below is the wrong implementation because eventListener should be passed same
            // window.removeEventListener("mousemove", () => {
            // })

            window.addEventListener("mousemove", mouseMove)
        })
    }, [])
    return position
}

function UseMousePointerHook(){
    const mousePosition = userMousePointer()
    return(
        <div>{`Current mouse location coordinate is x: ${mousePosition.x} and y: ${mousePosition.y}`}</div>
    )
}

export default UseMousePointerHook;