import {notificationsContext, totalNotificationsSelector} from "./stores/asynchronouosDataQueryAtom.jsx";
import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
import {useEffect} from "react";


function AsynchronousDataQuery(){
    return(
        <RecoilRoot>
            <MainApp/>
        </RecoilRoot>
    )
}

function MainApp() {
    const [notifications, setNotifications] = useRecoilState(notificationsContext);
    const totalNotifications = useRecoilValue(totalNotificationsSelector)

    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/notifications")
            .then(response => {
                return response.json()
            })
            .then(
                data => setNotifications(data)
            )
    },[])

    return(
        <div>
            <button>Home</button>

            <button>My network ({notifications.network >= 100 ? "99+" : notifications.network.toString()})</button>
            <button>Jobs ({notifications.jobs})</button>
            <button>Messaging ({notifications.messaging})</button>
            <button>Notifications ({notifications.notifications})</button>

            <button>Me ({totalNotifications})</button>
        </div>
    )
}


export default AsynchronousDataQuery