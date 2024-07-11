import { atom, atomFamily } from 'recoil';
import { todos } from '../pages/AtomFamily.tsx';

export interface Task{
	id: number
	title: string;
	description: string;
}

export const idList = atom({
	key: 'idList',
	default:[1, 2, 3, 4, 5]
})

export const titleAtom = atom({
	key: 'titleAtom',
	default:""
})

export const descriptionAtom = atom({
	key: 'descriptionAtom',
	default:""
})

export const taskFamily = atomFamily({
	key: 'taskFamily',
	default: id => todos.find(todo => todo.id === id)
})

