// import { object } from "prop-types";
import { useState, useEffect } from "react";


export default function useCurrency() {
	const [currency, setCurrency] = useState([]);

	useEffect(() => {
		fetch("https://api.apilayer.com/fixer/latest?symbols=EUR%2CUSD%2CUAH&base=UAH", {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			headers: {
				'apikey': "vKC9sp5Ma0LNqytXuiKisd9RbC7vLPFJ"
			}
		})

			.then((response) => response.json())
			.then((data) => setCurrency([data.base, ...Object.keys(data.rates)]));

	}, []);





	return <>

	</>


}
