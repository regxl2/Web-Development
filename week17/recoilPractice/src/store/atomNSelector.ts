import { atom, selector } from 'recoil';

export const homeAtom = atom({
	key: 'homeAtom',
	default: 1
})

export const networkAtom = atom({
	key: 'networkAtom',
	default: 5
})

export const jobAtom  = atom({
	key: 'jobAtom',
	default: 10
})

export const messageAtom = atom({
	key: 'messageAtom',
	default: 99
})

export const notificationAtom = atom({
	key: 'notificationAtom',
	default: 153
})

// selector is used to derive the values from the other atoms.
export const sumSelector = selector({
	key: 'sumSelector',
	get: ({get})=>{
		return get(homeAtom) + get(messageAtom) + get(jobAtom) + get(notificationAtom) + get(networkAtom);
	}
})
