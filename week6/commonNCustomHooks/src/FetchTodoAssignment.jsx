import React, {useEffect, useState} from "react";

function FetchTodoAssignment() {
    const [id, setId] = useState(0)
    return (
        <div>
            <button onClick={
                ()=>{
                    setId(1)
                }
            }>1</button>
            <button onClick={
                ()=>{
                    setId(2)
                }
            }>2</button>
            <button onClick={
                ()=>{
                    setId(3)
                }
            }>3</button>
            <button onClick={
                ()=>{
                    setId(4)
                }
            }>4</button>
            <Task id={id}/>
        </div>
    )
}

function Task({id}) {
    const [todo, setTodo] = useState({})
    useEffect(() => {
        const BASE_URL = "https://sum-server.100xdevs.com/todos"
        const queryParams = {
            id: id
        }
        // Convert the query parameters to a string
        const queryString = new URLSearchParams(queryParams).toString();
        const fullURL = `${BASE_URL}?${queryString}`
        console.log(fullURL)

        fetch(fullURL, {
                method: "GET",
            }
        ).then(async response => {
            const data = await response.json()
            // link is not todo instead it is giving list of todos. Therefore, I am using loop
            const todos = data.todos
            let index = todos.findIndex(todo => todo.id === id)
            if(index!==-1){
                console.log(index)
                setTodo(todos[index])
            }
        })
    }, [id]);

    return (
        <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
        </div>
    )
}

export default FetchTodoAssignment