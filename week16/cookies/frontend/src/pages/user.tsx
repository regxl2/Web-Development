import { useEffect, useState } from 'react';
import axios from 'axios';

const USER_URL = "http://localhost:3000/user";
const LOGOUT_URL = "http://localhost:3000/logout";

export const User = ()=>{
	const [email, setEmail] = useState('');
	useEffect(()=>{
		const fetchUser = async()=>{
			const response = await axios.get(USER_URL, {
				withCredentials: true
			});
			console.log(JSON.stringify(response));
			setEmail(response.data.email);
		}
		fetchUser();
	}, []);
	return(
		<>
			{email==''?<div>{"Fetching user details"}</div>:<div>{`User email is ${email}`}</div>}
			{email == '' ? null : <button onClick={async () => {
				await axios.post(LOGOUT_URL,{}, {
					withCredentials: true
				});
			}}>{"Logout"}</button>}
		</>
	)
}
