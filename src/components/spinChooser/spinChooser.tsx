import { useState, useEffect } from 'react';
import style from './spinChooser.module.css';
import SpinnerItem from '../spinnerItem/spinnerItem';

interface SpinChooserProps {
	list: string[]
}
const SpinChooser: React.FC<SpinChooserProps> = ({ list }) => {
	const [listCopy, setListCopy] = useState([...list])
	const [rendered, setRendered] = useState(listCopy[0]);

	const [num, setNum] = useState(10)
	const [run, setRun] = useState(true)

	//shuffles an array
	const shuffle = (array: string[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};
	//shuffles the array and resets the rendered item
	const updateList = (arr: string[]) => {
		const shuffledArray = shuffle(arr)
		console.log(shuffledArray)
		setListCopy(shuffledArray)
		shuffledArray[0] === rendered
			? setRendered(listCopy[1])
			: setRendered(listCopy[0])
	}

	const dinnerTime = () => {
		setRun(true)
		setTimeout(() => {
			setRun(false)
		}, 10000)
	}

	//time interval that resets rendered item
	useEffect(() => {
		const timeInterval = setInterval(() => {
			if (run === true) {
				updateList(listCopy)
				setNum(num + 1)
			} else (clearInterval(timeInterval))

		}, 1000);
		return () => { clearInterval(timeInterval) }
	}, [num, run])


	useEffect(() => {
		setListCopy([...list])
		setRun(false)
	}, [list])

	return (
		<>
			<div className={style.mainSpinnerWrapper}>
				<div className={style.spinnerItem}>
					<SpinnerItem itemId={num} itemName={rendered} />
				</div>
				<div className={style.buttonBox}>
					<button onClick={() => { dinnerTime() }}>start!</button>
					<button onClick={() => { setRun(false) }}>stop!</button>
				</div>
			</div>
		</>
	)
}
export default SpinChooser;
