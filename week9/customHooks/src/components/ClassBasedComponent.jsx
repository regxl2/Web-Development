import React, {useState} from "react";

class ClassBasedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    incrementCount = () =>{
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}

// This above class based component is equivalent to below functional component

function FunctionBasedComponent(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count + 1)
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

// export default ClassBasedComponent;
export default FunctionBasedComponent;