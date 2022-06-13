import CurrencyInput from "./components/CurrencyInput";
import Header from "./components/Header";
import useCurrency from './hooks/useCurrency'
import React, { useState, useEffect } from 'react'


function App() {
	const BASE_URL = "https://openexchangerates.org/api/latest.json?app_id=bdfbdbe024a049b3898746d7c5b15444&symbols=EUR%2CUSD%2CUAH";

	const [currencyOption, setCurrencyOption] = useState([]);
	const [formCurrency, setFormCurrency] = useState();
	const [toCurrency, setToCurrency] = useState();
	const [exchangeRate, setEexchangeRate] = useState();
	const [amount, setAmount] = useState(1);
	const [amountInFormCurrency, setAmountInFormCurrency] = useState(true);

	let toAmount, fromAmount
	if (amountInFormCurrency) {
		fromAmount = amount
		toAmount = amount * exchangeRate
	} else {
		toAmount = amount
		fromAmount = amount / exchangeRate
	}



	useEffect(() => {

		fetch(BASE_URL)
			.then((response) => response.json())
			.then((data) => {
				const firstCurrency = Object.keys(data.rates)[0]
				setCurrencyOption([data.base, ...Object.keys(data.rates)]);
				setFormCurrency(data.base)
				setToCurrency(firstCurrency)
				setEexchangeRate(data.rates[firstCurrency])
			})
	}, []);

	useEffect(() => {
		if (formCurrency != null && toCurrency != null) {
			fetch(`${BASE_URL}?base=${formCurrency}&symbols=${toCurrency}`)
				.then((response) => response.json())
				.then((data) => { setEexchangeRate(data.rates[toCurrency]) })
		}

	}, [toCurrency, formCurrency]);

	function handeleFormAmountChange(e) {
		setAmount(e.target.value)
		setAmountInFormCurrency(true)
	}

	function handeleToAmountChange(e) {
		setAmount(e.target.value)
		setAmountInFormCurrency(false)
	}

	return (
		<div className="app">
			{/* <Header currencies={currencies} /> */}
			<h2 style={{ textAlign: "center" }}>Конвертер Валют</h2>

			<CurrencyInput
				currencyOption={currencyOption}
				selectedCurrency={toCurrency}
				onChangeCurrency={e => setFormCurrency(e.target.value)}
				onChangeAmount={handeleFormAmountChange}
				amount={fromAmount}
			/>
			<CurrencyInput
				currencyOption={currencyOption}
				selectedCurrency={toCurrency}
				onChangeCurrency={e => setToCurrency(e.target.value)}
				onChangeAmount={handeleToAmountChange}
				amount={toAmount}
			/>
		</div>
	);
}

export default App;
