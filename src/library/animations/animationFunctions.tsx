export function handleRollUp(
	isMounted: boolean, 
	setIsMounted: React.Dispatch<React.SetStateAction<boolean>>, 
	) 	{
		setIsMounted(!isMounted)
		setTimeout(() => {
		}, 500);
	}
