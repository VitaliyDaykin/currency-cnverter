import React, { useState } from 'react'
import useCurrency from '../hooks/useCurrency'

export default function CurrencyInput(props) {
	const currencies = useCurrency();
	console.log(currencies);


	return (
		<div>

			<input type="text" defaultValue={props.amout} />
			<select defaultValue={1}>
				<option defaultValue={'UAH'}>{'UAH'}</option>
			</select>
		</div>
	)
}
