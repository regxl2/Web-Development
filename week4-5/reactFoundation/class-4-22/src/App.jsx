import {useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  function onClickHandler(){
      setCount(count+1)
  }
  return (
      // This looks like html code, but it is actually xml code
      <div>
          <CustomButton count={count} setCount={setCount}></CustomButton>
      </div>
  )
}

function CustomButton(props){
    function onClickHandler(){
        props.setCount(props.count+1)
    }
    return <button onClick={onClickHandler}>counter {props.count}</button>
}
// jsx file is just file in which you can write javascript and xml code.
// app.jsx file code is equivalent to the code which we have written in folder howReactWorksUnderTheHood
export default App
