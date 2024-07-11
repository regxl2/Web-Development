import {useEffect, useState} from "react";

function useIsOnlineHook(){
    const [online, setOnline] = useState(window.navigator.onLine)

    const onlineListener = ()=>{
        console.log("User is online")
        setOnline(true)
    }
    const offlineListener = ()=>{
        setOnline(false)
    }

    useEffect(()=>{
        window.addEventListener("online", onlineListener)
        window.addEventListener("offline", offlineListener)
        return(()=>{
            setOnline(false)
            window.removeEventListener("online", onlineListener)
            window.removeEventListener("offline", offlineListener)
        })
    }, [])
    return online
}

function CustomIsOnlineHook(){
    const isOnline = useIsOnlineHook()
    return (
        <div>
            {isOnline? "User is online": "User is offline"}
        </div>
    )
}

export default CustomIsOnlineHook;
