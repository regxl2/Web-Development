import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { homeAtom, jobAtom, messageAtom, networkAtom, notificationAtom, sumSelector } from '../store/atomNSelector.ts';

export const BasicAtomNSelector = ()=>{
	// useRecoilState is used to get value and function to update the value of the atom.
	const [homeState, setHomeState] = useRecoilState(homeAtom);

	// useRecoilValue is only used to get the value of the atom.
	const networkState = useRecoilValue(networkAtom);
	const jobState = useRecoilValue(jobAtom);
	const messageState = useRecoilValue(messageAtom);
	const notificationState = useRecoilValue(notificationAtom);

	// useSetRecoilState is used to get the function to update the value of the atom.
	const updateNotification = useSetRecoilState(notificationAtom);

	const sumState = useRecoilValue(sumSelector);

	return(
		<>
			<button onClick={()=>{setHomeState(count => count+1);}}>{`Home ${homeState}`}</button>
			<button>{`My Network ${networkState}`}</button>
			<button>{`Jobs ${jobState}`}</button>
			<button>{`Messaging ${messageState}`}</button>
			<button>{`Notifications ${notificationState}`}</button>
			<button onClick={()=>{updateNotification(count => count+1 )}}>{"Me"}</button>
			<button>{`Sum ${sumState}`}</button>
		</>
	)
}
