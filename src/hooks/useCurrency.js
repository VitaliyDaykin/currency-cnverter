import React, { useState, useEffect } from "react";


export default function useCurrency() {
	const [currency, setCurrency] = useState([]);

	useEffect(() => {
		const url = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => setCurrency(data));


	}, []);

	return [
		...currency.filter((cur) => cur.base_ccy === "UAH"),
		{ ccy: "UAH", base_ccy: "UAH", buy: "1", sale: "1" }
	];

}
