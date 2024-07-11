import { atomFamily, selectorFamily } from 'recoil';
import axios from 'axios';

interface AsyncTodo{
	id: number;
	title: string;
	description: string;
	completed: boolean;
}

export const asyncTodosAtom = atomFamily({
	key: 'asyncTodosAtom',
	default: selectorFamily({
		key: 'asyncTodosSelectorFamily',
		get: (id)=> async()=>{
			const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id?.toString()}`)
			return res.data.todo as AsyncTodo;
		}
	})
})
