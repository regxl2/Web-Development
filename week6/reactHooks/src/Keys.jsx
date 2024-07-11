import React, {useState} from "react";

// This is todo app to understand keys concept
export function Keys() {
    const [globalId, setGlobalId] = useState(4)
    const [todos, setTodos] = useState([{
        id: 1,
        title: "Task1",
        description: "Description1"
    },
        {
            id: 2,
            title: "Task2",
            description: "Description2"
        },
        {
            id: 3,
            title: "Task3",
            description: "Description3"
        }])
    return (
        <div>
            <button onClick={()=>{
                setTodos([...todos,{
                    id: globalId,
                    title: `Task${globalId}`,
                    description: `Description${globalId}`
                }])
                setGlobalId(globalId+1)
            }}>Click to Add Todo</button>
            {
                todos.map((todo) => {
                    // In React, the key prop is used to uniquely identify elements
                    // in a collection (e.g., an array of elements) when rendering lists.
                    // It is essential for React to efficiently update and re-render
                    // components in the virtual DOM.
                    return <Todo key = {todo.id} title = {todo.title} description = {todo.description}/>
                })
            }
        </div>
    )
}

// function Todo(props){
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <h2>{props.description}</h2>
//         </div>
//     )
// }

const Todo = React.memo(({title, description})=> {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
})