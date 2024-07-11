import React from "react";

class LifecycleEventsUsingClass extends React.Component{
    componentDidMount() {
        // Perform setup or data fetching here
        console.log("component is mounting")
    }

    componentWillUnmount() {
        console.log("component is unmounting")
    }

    render(){
        // Render UI
        return(
            <div>Class based Component</div>
        )
    }
}

export default LifecycleEventsUsingClass