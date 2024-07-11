import {RecoilRoot, useRecoilState, useRecoilStateLoadable} from "recoil";
import {todosAsyncSelectorFamily} from "./stores/selectorFamily.js";

export function RecoilStateLoadable(){
    return(
        <RecoilRoot>
            <Todo id = {1}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
            <Todo id = {2}/>
        </RecoilRoot>
    )
}

function Todo({id}) {
    const [todo, setTodo] = useRecoilStateLoadable(todosAsyncSelectorFamily(id))
    // We know todoRecoilState is asynchronous. Therefore, we can use useRecoilStateLoadable() to show
    // different screens on the screen until the data is not loaded. It is similar to Suspense(API)
    if(todo.state === "loading"){
        return(
            <div>Loading...</div>
        )
    }
    else if(todo.state === "hasError"){
        return(
            <div>Error occurred</div>
        )
    }
    else if(todo.state === "hasValue"){
        return (
            <>
                {todo.contents.title}
                {todo.contents.description}
                <br/>
            </>
        )
    }
}
