import './CountryButton.scss';

export default function CountryButton({ countries, countryCode, setCurrentCountry }) {
	// console.log(countries);
	const country = countries.find((country) => country.alpha3Code === countryCode);

	function handleClick(country) {
		setCurrentCountry(country);
	}
	return (
		<li className="country-button">
			{/* {countryCode} */}

			<button type="button" onClick={() => handleClick(country)}>
				{country.name}
			</button>
		</li>
	);
}
