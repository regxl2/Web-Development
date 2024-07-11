import { useState } from 'react';
import { LabelInput } from '../components/labelInput.tsx';

export const SignIn = ()=>{
	const [email ,setEmail] = useState('');
	const [password , setPassword] = useState('');

	return (
		<div>
			<LabelInput label={"Email"} onChange={(e)=>{setEmail(e.target.value);}} value = {email}/>
			<LabelInput label={"Password"} onChange={(e)=>{setPassword(e.target.value);}} value = {password}/>
			<button>{"Signin"}</button>
		</div>
	)
};
