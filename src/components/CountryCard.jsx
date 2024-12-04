import './CountriesCard.scss';
export default function CountryCard({
	country,
	setDetailsActive,
	// setCurrentCountry,
	setHistory,
}) {
	function handleClick() {
		// setCurrentCountry(country);
		setHistory((currentHistory) => [...currentHistory, country]);
		setDetailsActive(true);
	}

	const cardStyle = { backgroundImage: `url(${country.flag})` };
	return (
		<li className="country-card" style={cardStyle} onClick={handleClick}>
			<h3 className="country-card__name">{country.name}</h3>
			<div className="country-card__info">
				<p className="country-card__table-row">
					<span className="country-card__table-row-title">Population:</span>
					{country.population}
				</p>
				<p className="country-card__table-row">
					<span className="country-card__table-row-title">Region:</span>
					{country.region}
				</p>
				<p className="country-card__table-row">
					<span className="country-card__table-row-title">Capital:</span>
					{country.capital}
				</p>
			</div>
		</li>
	);
}
