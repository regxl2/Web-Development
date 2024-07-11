import { ChangeEvent } from 'react';
import { descriptionAtom, idList, Task, taskFamily, titleAtom } from '../store/atomFamily.ts';
import { useRecoilState, useRecoilValue } from 'recoil';

export let todos: Task[] = [
	{id: 1, title: 'title1', description: 'description1'},
	{id: 2, title: 'title2', description: 'description2'},
	{id: 3, title: 'title3', description: 'description3'},
	{id: 4, title: 'title4', description: 'description4'},
	{id: 5, title: 'title5', description: 'description5'},
]

export const AtomFamily = () => {
	return (
		<>
			<AddTodo/>
			<ListTodo/>
		</>
	)
}

const AddTodo  = ()=>{
	const[title, setTitle] = useRecoilState(titleAtom);
	const[description, setDescription] = useRecoilState(descriptionAtom);
	const [list, setList] = useRecoilState(idList);
	return(
		<div>
			<input type={'text'} placeholder={"title"} onChange={(e: ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}}/>
			<input type={'text'} placeholder={'description'} onChange={(e: ChangeEvent<HTMLInputElement>)=>{setDescription(e.target.value)}}/>
			<button onClick={ ()=>{
				const id = list.length > 0 ? list[list.length - 1] + 1 : 1;
				todos.push({id, title, description});
				setList(list => [...list, id]);
			}}>{'update'}</button>
		</div>
	)
}

const ListTodo = ()=>{
	const list = useRecoilValue(idList);
	return(
		<div>
			{
				list.map(id =>{
					return <Todo key={id} id={id}/>
				})
			}
		</div>
	)
}

const Todo = ({id}: {id: number})=>{
	const [task, setTask]= useRecoilState(taskFamily(id));
	return (
		<div>
			<div>{task?.title}</div>
			<div>{task?.description}</div>
			<input type={'text'} placeholder={"title"} onChange={(e: ChangeEvent<HTMLInputElement>) => {
				setTask({id, title: e.target.value, description: task?.description||""});
			}} />
			<input type={'text'} placeholder={'description'} onChange={(e: ChangeEvent<HTMLInputElement>) => {
				setTask({id, title: task?.title||"", description: e.target.value});
			}} />
		</div>
	)
}
