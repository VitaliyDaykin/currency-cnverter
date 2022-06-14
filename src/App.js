import React, { useEffect, useState } from 'react';
import CurrencyInput from './components/CurrencyInput';
import Header from './components/Header';


const BASE_URL = 'https://cdn.cur.su/api/nbu.json'

function App() {
	const [currencyOptions, setCurrencyOptions] = useState([])
	const [fromCurrency, setFromCurrency] = useState()
	const [toCurrency, setToCurrency] = useState()
	const [exchangeRate, setExchangeRate] = useState()
	const [amount, setAmount] = useState(1)
	const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
	const [exchangeRateBoard, setExchangeRateBoard] = useState()



	let toAmount, fromAmount
	if (amountInFromCurrency) {
		fromAmount = amount
		toAmount = amount * exchangeRate
	} else {
		toAmount = amount
		fromAmount = amount / exchangeRate
	}

	useEffect(() => {
		fetch(BASE_URL)
			.then(res => res.json())
			.then(data => {
				const defaultCurrency = Object.keys(data.rates).includes("UAH") ? "UAH" : Object.keys(data.rates)[1];
				const firstCurrency = Object.keys(data.rates)[0]
				setCurrencyOptions([data.base, ...Object.keys(data.rates)])
				setFromCurrency(data.base)
				setToCurrency(defaultCurrency)
				setExchangeRate(data.rates[firstCurrency])
				setExchangeRateBoard(data.rates)


			})
	}, [])

	useEffect(() => {
		if (fromCurrency != null && toCurrency != null) {
			fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
				.then(res => res.json())
				.then(data => setExchangeRate(data.rates[toCurrency]))
		}
	}, [fromCurrency, toCurrency])

	function handleFromAmountChange(e) {
		setAmount(e.target.value)
		setAmountInFromCurrency(true)
	}

	function handleToAmountChange(e) {
		setAmount(e.target.value)
		setAmountInFromCurrency(false)
	}

	return (
		<>

			<div className="app">
				<Header exchangeRateBoard={exchangeRateBoard} />
				<h2 style={{ textAlign: "center", marginBottom: 0 }}>Конвертер Валют</h2>
				<p style={{ textAlign: "center", marginTop: 0 }}>Банк</p>
				<CurrencyInput
					currencyOptions={currencyOptions}
					selectedCurrency={fromCurrency}
					onChangeCurrency={e => setFromCurrency(e.target.value)}
					onChangeAmount={handleFromAmountChange}
					amount={fromAmount}
				/>

				<CurrencyInput
					currencyOptions={currencyOptions}
					selectedCurrency={toCurrency}
					onChangeCurrency={e => setToCurrency(e.target.value)}
					onChangeAmount={handleToAmountChange}
					amount={toAmount}
				/>
			</div>
		</>
	);
}

export default App;
