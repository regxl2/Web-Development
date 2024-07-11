import { useEffect, useState } from 'react'
import axios from 'axios'

// Data fetching custom hooks
function useData(n){
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        // if n changes the useEffect will start another interval with new value of n along with
        // older interval with older value of n. Therefore, we need to clean up everytime value of n changes
        const interval = setInterval(()=>{
            axios.get("https://sum-server.100xdevs.com/todos")
                .then(res =>{
                    setLoading(false)
                    setTodos(res.data.todos)
                })
        }, n*1000)
        axios.get("https://sum-server.100xdevs.com/todos")
            .then(res =>{
                setLoading(false)
                setTodos(res.data.todos)
            })

        return (()=>{
            clearInterval(interval)
        })
    }, [n])

    return {todos, loading};
}

function DataFetchingCustomHooks() {
    // this below code will become ugly when if we have to load the same the todo on multiple
    // screen then if we to make changes after the it will be difficult. So, in that case will can make custom hooks
    // if we want to change something after we will make changes in the custom hook and changes will reflect in all other
    // where we have used custom hook.
    // const [todos, setTodos] = useState([])
    //
    // useEffect(() => {
    //     axios.get("https://sum-server.100xdevs.com/todos")
    //         .then(res => {
    //             setTodos(res.data.todos);
    //         })
    // }, [])

    const {todos, loading} = useData(10);

    return (
        <>
            {loading? <div>Loading...</div> : todos.map(task => <Track todo={task}/>)}
        </>
    )
}

function Track({todo}) {
    return <div>
        {todo.title}
        <br />
        {todo.description}
    </div>
}

export default DataFetchingCustomHooks;
