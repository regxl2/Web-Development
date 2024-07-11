import { useRecoilValue } from 'recoil';
import { asyncAtom, meAtom } from '../store/asyncAtom.ts';

export const AsyncDataQueries = ()=>{
	const asyncState = useRecoilValue(asyncAtom);
	const meState = useRecoilValue(meAtom);
	return (
		<>
			<button>{`My Network ${asyncState.network}`}</button>
			<button>{`Jobs ${asyncState.jobs}`}</button>
			<button>{`Messaging ${asyncState.messaging}`}</button>
			<button>{`Notifications ${asyncState.notifications}`}</button>
			<button>{`Me ${meState}`}</button>
		</>
	)
}
