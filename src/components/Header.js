import React, { useState, useEffect } from "react";


export default function Header(props) {

	const [currency, setCurrency] = useState([]);

	useEffect(() => {
		const url = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => setCurrency(data));
	}, []);

	const newCurrency = [...currency.filter((cur) => cur.base_ccy === "UAH")]

	return (
		<>
			<header>
				<h2 style={{ textAlign: "center", marginBottom: 0 }}>Курс Валют</h2>
				<p style={{ textAlign: "center", marginTop: 0 }}>Обменный киоск</p>
				{newCurrency.length ? (
					<div className="exchange">
						<div>Покупка</div>
						<div></div>
						<div>Продажа</div>

						{newCurrency.map((currency) => (
							<React.Fragment key={currency.ccy}>
								<div className="exchange__value">
									{Number(currency.buy).toFixed(2)}
								</div>
								<div className="exchange__currency">{currency.ccy}</div>
								<div className="exchange__value">
									{Number(currency.sale).toFixed(2)}
								</div>
							</React.Fragment>
						))}
					</div>
				) : (
					<h3 style={{ textAlign: "center" }}>Загружаем</h3>
				)}
			</header>
		</>
	);
}
