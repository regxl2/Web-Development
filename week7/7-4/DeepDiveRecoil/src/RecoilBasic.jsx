
import './RecoilBasic.css'
import {RecoilRoot, useRecoilValue} from "recoil";
import {jobContext, messagingContext, networkContext, notificationContext, totalContext} from "./stores/recoilBasicAtoms.jsx";

function RecoilBasic() {
    return(
        <RecoilRoot>
            <MainApp/>
        </RecoilRoot>
    )
}

function MainApp(){
    const networkCount = useRecoilValue(networkContext)
    const jobCount = useRecoilValue(jobContext)
    const messagingCount = useRecoilValue(messagingContext)
    const notificationCount = useRecoilValue(notificationContext)
    const totalCount = useRecoilValue(totalContext)
    return (
        <div>
            <button>Home</button>

            <button>My network ({networkCount>=100 ? "99+":networkCount.toString()})</button>
            <button>Jobs ({jobCount})</button>
            <button>Messaging ({messagingCount})</button>
            <button>Notifications ({notificationCount})</button>

            {/*if you want the values to derive from the current atoms, then we can use */}
            {/*the selector in recoil for state management. */}
            <button>Me ({totalCount})</button>
        </div>
    )
}

export default RecoilBasic
