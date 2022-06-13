import React, { useState } from 'react'


export default function CurrencyInput(props) {
	const { currencyOption, selectedCurrency, onChangeCurrency, amount, onChangeAmount } = props


	return (
		<div>

			<input type="text" value={amount} onChange={onChangeAmount} />
			<select defaultValue={selectedCurrency} onChange={onChangeCurrency}>
				{currencyOption.map((option, i) => (
					<option key={i} defaultValue={option}>{option}</option>
				))}

			</select>
		</div>
	)
}


