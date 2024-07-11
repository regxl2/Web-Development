import { useState } from 'react';
import { LabelInput } from '../components/labelInput.tsx';
import axios from 'axios';

const SIGNUP_URL = "http://localhost:3000/signup";

export const SignUp = ()=>{
	const [email ,setEmail] = useState('');
	const [password , setPassword] = useState('');
	return (
		<div>
			<LabelInput label={"Email"} onChange={(e)=>{setEmail(e.target.value);}} value = {email}/>
			<LabelInput label={"Password"} onChange={(e)=>{setPassword(e.target.value);}} value = {password}/>
			<button onClick={async()=>{
				await axios.post(SIGNUP_URL, {email, password}, {
					withCredentials: true
				});
			}}>{"Signup"}</button>
		</div>
	)
}

