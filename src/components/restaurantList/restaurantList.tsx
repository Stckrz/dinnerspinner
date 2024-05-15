import { SetStateAction, useState } from 'react';
import style from './restaurantList.module.css';

interface RestaurantListProps{
	list: string[],
	setList: React.Dispatch<SetStateAction<string[]>>
}

const RestaurantList: React.FC<RestaurantListProps> = ({list, setList}) => {
	const [entryField, setEntryField] = useState("");
	
	const restaurantListAdd = () => {
		setList([...list, entryField])
	}

	return (
		<>
			<div className={style.restaurantListWrapper}>
				<div className={style.restaurantInputContainer}>
					<input onChange={e=>setEntryField(e.target.value)}/>
					<button onClick={restaurantListAdd}>Add</button>
				</div>
				<div className={style.restaurantList}>
					{
					list.map(( restaurant: string )=>{
							return(
							<div className={style.restaurantItem}>{ restaurant }</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}
export default RestaurantList;
