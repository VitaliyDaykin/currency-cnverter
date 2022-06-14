import React from 'react'


export default function CurrencyInput(props) {
	const { currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount } = props


	return (
		<div>

			<input type="number" value={amount} onChange={onChangeAmount} />
			<select value={selectedCurrency} onChange={onChangeCurrency}>
				{currencyOptions.map((option, i) => (
					<option key={i} value={option}>{option}</option>
				))}

			</select>
		</div>
	)
}


