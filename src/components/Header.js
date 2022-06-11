import React from "react";

export default function Header(props) {
	const { currencies } = props;

	return (
		<header>
			<h2 style={{ textAlign: "center" }}>Курс Валют</h2>
			{currencies.length ? (
				<div className="exchange">
					<div>Покупка</div>
					<div></div>
					<div>Продажа</div>

					{currencies.map((currency) => (
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
	);
}
