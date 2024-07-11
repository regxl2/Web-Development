import {atomFamily, RecoilRoot, useRecoilState, useSetRecoilState} from "recoil";
import {todosAsyncSelectorFamily} from "./stores/selectorFamily.js";
import {useEffect} from "react";
export function SelectorFamily(){
    return(
        <RecoilRoot>
            <Todo id = {1}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            {/*passing with the same id will then network call
             be made once only because internally value is cached.*/}
        </RecoilRoot>
    )
}

function Todo({id}) {
    const [todo, setTodo] = useRecoilState(todosAsyncSelectorFamily(id))

    return (
        <>
            {todo.title}
            {todo.description}
            <br/>
        </>
    )
}