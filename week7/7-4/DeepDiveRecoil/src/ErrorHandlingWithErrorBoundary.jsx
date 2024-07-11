import {Component, useState} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {error: ''};
    }

    static getDerivedStateFromProps(error) {
        return {error: error};
    }
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by componentDidCatch:', error, errorInfo);
    }
    render() {
        if(this.state.error) {
            return <div>Something went wrong. Please try again later.</div>;
        }
        return this.props.children
    }
}

export function ErrorHandlingWithErrorBoundary(){
    return(
        <div>
            <Counter1/>
            <ErrorBoundary>
                <Counter2/>
            </ErrorBoundary>
        </div>
    )
}

function Counter1(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>Counter1 value: {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Increment Counter1</button>
        </div>
    )
}
function Counter2(){
    const [count, setCount] = useState(0);
    // If count value is greater than 3 then, It will throw Error and upon throwing error.
    // The Whole screen will go blank, but we want the error to be handled gracefully only
    if(count>3){
        throw new Error()
    }
    return(
        <div>
            <p>Counter2 value: {count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment Counter2
            </button>
        </div>
    )
}