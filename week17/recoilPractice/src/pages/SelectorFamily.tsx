import { useRecoilValue } from 'recoil';
import { asyncTodosAtom } from '../store/selectorFamily.ts';

export const SelectorFamily = () => {
	const list = [1, 2, 3, 4, 5];
	return(
		<>
			{list.map(num => <Todo key = {num} id={num}/>)}
		</>
	)
}

const Todo = ({id}: {id: number})=>{
	const todo = useRecoilValue(asyncTodosAtom(id));
	return(
		<>
			<div>{todo.title}</div>
			<div>{todo.description}</div>
			<div>{todo.completed}</div>
		</>
	)
}
