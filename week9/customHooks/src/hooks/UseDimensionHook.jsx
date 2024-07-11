import {useEffect, useState} from "react";

function useDimensionHook(){
    const [dimension, setDimension] = useState({x: window.innerWidth, y: window.innerHeight})
    const resizeListener = () => {
        setDimension({x: window.innerWidth, y: window.innerHeight})
    }
    useEffect(() => {
        window.addEventListener('resize', resizeListener)

        return(()=>{
            window.removeEventListener('resize', resizeListener)
        })
    }, []);
    return dimension
}

function UseDimensionHook(){
    const dimension = useDimensionHook()
    return(
        <div>
            {`Width: ${dimension.x} Height: ${dimension.y}`}
        </div>
    )
}

export default UseDimensionHook;