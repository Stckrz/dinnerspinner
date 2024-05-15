import { useState, useEffect } from 'react';
import './App.css'
import RestaurantList from './components/restaurantList/restaurantList';
import SpinChooser from './components/spinChooser/spinChooser';

function App() {
	const [restaurantList, setRestaurantList] = useState(["arby's", "mcdonalds", "taco johns"]);

	useEffect(()=>{

	console.log("restlist",restaurantList)
		},[restaurantList])
	return (
		<>
			<div className={"mainDiv"}>
				<div className={"listContainer"}>
					<RestaurantList list={restaurantList} setList={setRestaurantList} />
				</div>
				<div className={"spinnerContainer"}>
					<SpinChooser list={restaurantList}/>
				</div>
			</div>
		</>
	)
}

export default App
