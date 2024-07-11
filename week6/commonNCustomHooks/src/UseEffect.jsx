import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './UseEffect.css'

function UseEffect() {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        fetch("https://sum-server.100xdevs.com/todos", {
            method: "GET"
        }).then(async response => {
            const data = await response.json()
            setTodos(data.todos)
        })
    }, [])
    return (
        <div>
            {
                todos.map( todo => {
                    return <Task title={todo.title} description={todo.description}/>
                })
            }
        </div>
    )
}

function Task({title, description}){
    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
}
export default UseEffect
