import { useCountriesContext } from '../contexts/CountriesContext';
import './CountryButton.scss';

export default function CountryButton({
	countryCode,
	// setCurrentCountry,
	// history,
}) {
	// console.log(countries);
	const { countries, history, region, searchQuery, isDetailsActive, isLoading, dispatch } =
		useCountriesContext();

	const country = countries.find((country) => country.alpha3Code === countryCode);

	// function handleClick(country) {
	// 	// setCurrentCountry(country);
	// 	setHistory((currentHistory) => [...currentHistory, country]);
	// }

	return (
		<li className="country-button">
			{/* {countryCode} */}

			<button type="button" onClick={() => dispatch({ type: 'add to history', payload: country })}>
				{country.name}
			</button>
		</li>
	);
}
