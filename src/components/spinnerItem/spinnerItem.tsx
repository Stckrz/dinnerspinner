import animationStyle from '../../library/animations/animationStyles.module.css';
import { handleRollUp } from '../../library/animations/animationFunctions';
import { useEffect, useState } from 'react';

interface SpinnerItemProps {
	itemId: number,
	itemName: string
}
const SpinnerItem: React.FC<SpinnerItemProps> = ({ itemId, itemName }) => {
	const [isMounted, setIsMounted] = useState(true);

	useEffect(()=>{
			handleRollUp(isMounted, setIsMounted)
		},[itemName, itemId])

	return (
			<div key={itemId} className={isMounted ? animationStyle.componentRollIn : animationStyle.componentRollOut}>{itemName}</div>
	)

}
export default SpinnerItem;
