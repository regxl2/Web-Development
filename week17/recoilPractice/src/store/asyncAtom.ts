import { atom, selector } from 'recoil';
import axios  from 'axios';

interface AsyncAtom{
	network: number;
	jobs: number;
	messaging: number;
	notifications: number;
}

export const asyncAtom = atom({
	key : 'asyncAtom',
	default: selector({
		key: 'asyncAtomSelector',
		get: async ()=>{
			setTimeout(()=>{}, 3000)
			const res = await axios.get("https://sum-server.100xdevs.com/notifications");
			return res.data as AsyncAtom;
		}
	})
})

export const meAtom = selector({
	key: 'meAtom',
	get: ({get})=>{
		const atom = get(asyncAtom);
		return atom.notifications + atom.jobs + atom.network + atom.messaging;
	}
})
