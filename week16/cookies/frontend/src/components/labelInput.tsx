export const LabelInput = ({label, onChange, value}:{label: string, onChange(e: any): void, value: string})=>{
	return(
		<>
			<div>{label}</div>
			<div><input type='text' onChange={onChange} value={value} /></div>
		</>
	)
}
