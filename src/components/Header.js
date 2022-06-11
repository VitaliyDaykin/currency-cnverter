import React from 'react'

export default function Header() {

	fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", {
		method: 'POST',
		header: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		// body: JSON.stringify()
	})
		.then(function (resp) { return resp.json() })
		.then(function (data) {
			// console.log(data)
		})


	return (
		<div>

		</div>
	)
}
