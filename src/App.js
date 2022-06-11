import CurrencyInput from "./components/CurrencyInput";
import Header from "./components/Header";
import { useState, useEffect } from 'react';
import axios from "axios";


function App() {

	const [amount1, setAmount1] = useState(1);
	const [amount2, setAmount2] = useState(1);
	const [currency1, setCurrency1] = useState('USD');
	const [currency2, setCurrency2] = useState('USD');
	const [retes, setRetes] = useState([]);

	useEffect(() => {
		axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
			.then(response => {
				setRetes(response.data.retes)
				console.log(response.data);

			})
	}, [])

	return (
		<>
			<Header />
			<CurrencyInput currencies={[retes]} amount={amount1} currency={currency1} />
			<CurrencyInput currencies={[retes]} amount={amount2} currency={currency2} />
		</>
	);
}

export default App;
