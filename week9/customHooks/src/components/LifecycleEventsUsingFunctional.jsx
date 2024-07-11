import {useEffect} from "react";

function LifecycleEventsUsingFunctional() {
    useEffect(() => {
        //Perform setup or data fetching here
        console.log("Component is mounting");

        return (() => {
            // perform cleanup code (it is similar to Component will unmount
            console.log("Component is unmounting")
        })

    }, []);
    return (
        <div>
            Inside from the component
        </div>
    )
}

export default LifecycleEventsUsingFunctional;