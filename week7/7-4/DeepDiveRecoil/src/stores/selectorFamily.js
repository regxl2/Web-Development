import {atomFamily, selector, selectorFamily} from "recoil";

export const todosAsyncSelectorFamily = atomFamily({
    key: 'todosAsyncSelectorFamily',
    default: selectorFamily({
        key: 'todosSelectorFamily',
        get: (id) => async ({get}) => {
            await new Promise(resolve => setTimeout(resolve, 3000));
            const response = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
            const data = await response.json()
            return data["todo"]
        }
    })
})



