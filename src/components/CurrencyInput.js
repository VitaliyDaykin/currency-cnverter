import React from 'react'
import PropTypes from 'prop-types'

export default function CurrencyInput(props) {

	CurrencyInput.propTypes = {
		amout: PropTypes.number.isRequired,
		currency: PropTypes.string.isRequired,
		currencies: PropTypes.array,
	}

	return (
		<div>
			<input type="text" defaultValue={props.amout} />
			<select defaultValue={props.currency}>
				{props.currencies.map((currency => (
					<option defaultValue={currency}>{currency}</option>
				)))}

			</select>
		</div>
	)
}
