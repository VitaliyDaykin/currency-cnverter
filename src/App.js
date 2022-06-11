import CurrencyInput from "./components/CurrencyInput";
import Header from "./components/Header";
import useCurrency from './hooks/useCurrency'



function App() {
	const currencies = useCurrency();


	return (
		<div className="app">
			<Header currencies={currencies} />
			<h2 style={{ textAlign: "center" }}>Конвертер Валют</h2>
			<CurrencyInput currencies={'UAH'} amount={1} currency={1} />
			<CurrencyInput currencies={['UAH']} amount={1} currency={1} />
		</div>
	);
}

export default App;
