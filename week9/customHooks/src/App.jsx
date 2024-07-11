import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from "./components/ClassBasedComponent.jsx";
import FunctionBasedComponent from "./components/ClassBasedComponent.jsx";
import LifecycleEventsUsingFunctional from "./components/LifecycleEventsUsingFunctional.jsx";
import LifecycleEventsUsingClass from "./components/LifecycleEventsUsingClass.jsx";
import DataFetchingHooks from "./hooks/DataFetchingCustomHooks.jsx";
import IsOnlineHook from "./hooks/IsOnlineHook.jsx";
import CustomIsOnlineHook from "./hooks/IsOnlineHook.jsx";
import UseMousePointerHook from "./hooks/UseMousePointerHook.jsx";
import UseDimensionHook from "./hooks/UseDimensionHook.jsx";
import UseTimerHook from "./hooks/UseTimerHook.jsx";
import UseDebounceHook from "./hooks/UseDebounceHook.jsx";

function App() {

    // This below code is for LifecycleEventsUsingFunctional/LifecycleEventsUsingClass
    // const [render, setRender] = useState(true);
    // const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setRender(false)
    //     }, 10000);
    // })

    return (
        <>
            {/*<ClassBasedComponent/>*/}
            {/*<FunctionBasedComponent/>*/}

            {/*{render?<LifecycleEventsUsingFunctional/>:<div></div>}*/}
            {/*{render?<LifecycleEventsUsingClass/>:<div></div>}*/}

            {/*<DataFetchingHooks/>*/}
            {/*<CustomIsOnlineHook/>*/}
            {/*<UseMousePointerHook/>*/}
            {/*<UseDimensionHook/>*/}
            {/*<UseTimerHook/>*/}
            <UseDebounceHook/>
        </>
    )
}

export default App
