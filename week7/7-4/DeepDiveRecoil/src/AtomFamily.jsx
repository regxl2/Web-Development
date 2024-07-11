import {atomFamily, RecoilRoot, useRecoilState, useSetRecoilState} from "recoil";
import {todosAtomFamily} from "./stores/todosAtomFamily.jsx";
import {useEffect} from "react";

export function AtomFamily(){
    return(
        <RecoilRoot>
            <UpdateComponent/>
            <Todo id = {1}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            {/*passing with the same id will create only one atom and not multiple atoms.*/}
        </RecoilRoot>
    )
}

function UpdateComponent(){
    // This is a demonstration that passing same id will create only one atom and not multiple atoms.
    const updateTodoItem = useSetRecoilState(todosAtomFamily(2))

    // since, all the component using the same id will get updated with new value shows that
    // only one atom was created.
    useEffect(()=>{
        setTimeout(()=>{
            updateTodoItem({
                id: 2,
                title: "Go to sleep",
                description: "Go to sleep at 11pm"
            })
        }, 5000)
    },[])

    return(
        <></>
    )
}

function Todo({id}){
    const [todo,setTodo] = useRecoilState(todosAtomFamily(id))

    return(
        <>
            {todo.title}
            {todo.description}
            <br/>
        </>
    )
}