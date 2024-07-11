import {atomFamily} from "recoil";
import {TODOS} from "../todos.js";

// An atom represents a piece of state with Recoil. An atom is created and registered per <RecoilRoot> by your app.
// But, what if your state isn’t global? What if your state is associated with a particular instance of a control,
// or with a particular element? For example, maybe your app is a UI prototyping tool where the user can dynamically
// add elements and each element has state, such as its position. Ideally, each element would get its own atom of state.
// You could implement this yourself via a memoization pattern. But Recoil provides this pattern for you with the atomFamily()
// utility. An Atom Family represents a collection of atoms. When you call atomFamily() it will return a function which provides
// the RecoilState atom based on the parameters you pass in.


// we can make a whole TODOS list as an atom, then the problem is if any value of an item changes inside the list then,
// It makes every component rerender who uses any item of the list.
// export const todosAtomFamily = atom({
//     key: "todos",
//     default: TODOS
// })


// By using the atomFamily, it will make each item of the list as an atom, and if any value of an item changes
// then only component related to that item will rerender.
export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: id => {
        return TODOS.find(x => x.id === id)
    }
})